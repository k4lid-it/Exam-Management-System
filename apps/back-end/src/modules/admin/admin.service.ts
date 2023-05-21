import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createAdminDto } from 'src/dtos/createAdminDto.dto';
import { Administrator } from 'src/entities/Administrator.entity';
import { exam } from 'src/entities/Exam.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {

    constructor(@InjectRepository(Administrator) private adminRepository: Repository<Administrator>,
                @InjectRepository(exam) private examRepository: Repository<exam>){}

    async createAdmins(createAdminDtoArray: createAdminDto[]) {
        const newAdminArray = createAdminDtoArray.map((dto) =>
          this.adminRepository.create(dto),
        );
        return this.adminRepository.save(newAdminArray);
      }

    async viewExams(): Promise<exam[]>{
        return this.examRepository.find();
    }
}
