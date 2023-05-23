import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';
import { changeInvigilatorDto } from 'src/dtos/changeInvigilator.dto';
import { createAdminDto } from 'src/dtos/createAdminDto.dto';
import { Administrator } from 'src/entities/Administrator.entity';
import { exam } from 'src/entities/Exam.entity';
import { ticket } from 'src/entities/ticket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {

    constructor(@InjectRepository(Administrator) private adminRepository: Repository<Administrator>,
                @InjectRepository(exam) private examRepository: Repository<exam>,
                @InjectRepository(ticket) private ticketRepository: Repository<ticket>){}

    async createAdmins(createAdminDtoArray: createAdminDto[]) {
        const newAdminArray = createAdminDtoArray.map((dto) =>
          this.adminRepository.create(dto),
        );
        return this.adminRepository.save(newAdminArray);
      }

      async viewExams(): Promise <exam[]> {
        const exams = await this.examRepository.find();
        if (exams.length > 0){
          return exams;
        }else{
          throw new Error('no exams found');
        }
      }

    async changeInvigilator(changeInvigilatorDto:changeInvigilatorDto){
      const oldInvigilator = await this.examRepository.findOne({where:{invigilator:changeInvigilatorDto.oldInvigilator, time:changeInvigilatorDto.time}});
      const newInvigilatorRecords = await this.examRepository.find({where:{invigilator:changeInvigilatorDto.newInvigilator, time:changeInvigilatorDto.time}});

      if (newInvigilatorRecords.length > 0) {
        throw new error ('time conflect');
      }
    
      oldInvigilator.invigilator = changeInvigilatorDto.newInvigilator;
      await this.examRepository.save(oldInvigilator);
    }

    async viewTickets(): Promise<ticket[]>{
      const tickets =  await this.ticketRepository.find();
      if (tickets.length > 0){
        return tickets;
      }else{
        throw new Error('No tickets found');
      }

    }

  }