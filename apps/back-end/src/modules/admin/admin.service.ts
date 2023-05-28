import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { changeInvigilatorDto } from 'src/dtos/changeInvigilator.dto';
import { createAdminDto } from 'src/dtos/createAdminDto.dto';
import { Administrator } from 'src/entities/Administrator.entity';
import { exam } from 'src/entities/Exam.entity';
import { student } from 'src/entities/student.entity';
import { ticket } from 'src/entities/ticket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {

    constructor(@InjectRepository(Administrator) private adminRepository: Repository<Administrator>,
                @InjectRepository(exam) private examRepository: Repository<exam>,
                @InjectRepository(ticket) private ticketRepository: Repository<ticket>,
                @InjectRepository(student) private studentRepository: Repository<student>){}

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
        throw new Error('time conflect');
      }else {
      oldInvigilator.invigilator = changeInvigilatorDto.newInvigilator;
      await this.examRepository.save(oldInvigilator);
      return { message: 'Success'}
      }
    }
  

    async viewMyTickets(adminName:string): Promise<ticket[]>{
      const tickets =  await this.ticketRepository.find({where:{employee:adminName}});
      if (tickets.length > 0){
        return tickets;
      }else{
        throw new Error('No tickets found');
      }

    }

    async viewTicketDetails(ticketID:number){
      const ticket = this.ticketRepository.findOne({where:{id:ticketID}});
      if (ticket){
        return ticket;
      }else{
        throw new Error('Ticket not found');
      }
    }

  async viewTickets(): Promise<ticket[]> {
    const tickets = await this.ticketRepository.find();
    if (tickets.length > 0) {
      return tickets;
    } else {
      throw new Error('No tickets found');
    }
  }

    async acceptTicket(ticketID:number,admin:string){
      const ticket = await this.ticketRepository.findOne({where:{id:ticketID}});
      if (ticket) {
        ticket.status = 'In progress';
        ticket.employee = admin;
        this.ticketRepository.save(ticket);
      } else {
        throw new Error('ticket not found');
      }
    }

    async reopenTicket(ticketID:number){
      const ticket = await this.ticketRepository.findOne({where:{id:ticketID}});
      if (ticket) {
        ticket.status = 'Open';
        ticket.employee = null;
        this.ticketRepository.save(ticket);
      } else {
        throw new Error('ticket not found');
      }
    }
  

    async closeTicket(ticketID:number){
      const ticket = await this.ticketRepository.findOne({where:{id:ticketID}});
      if (ticket) {
        ticket.status = 'Closed';
        this.ticketRepository.save(ticket);
      } else {
        throw new Error('ticket not found');
      }
    } 

  async checkStudentsRoom(studentID: string) {
    const studentRecords = await this.studentRepository.find({ where: { studentID } });


    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', hour12: true } as Intl.DateTimeFormatOptions;
    const currentTime = now.toLocaleTimeString([], options);


    const currentStudentRecord = studentRecords.find((student) => {
      const [startTime, endTime] = student.time.split('-').map((time) => time.trim());
      return currentTime >= startTime && currentTime <= endTime;
    });

    if (currentStudentRecord) {
      throw new Error("Please go to room " + currentStudentRecord.room);

    } else {
      throw new Error('The student doesnt have an exam at the current time');
    }
  }


}


