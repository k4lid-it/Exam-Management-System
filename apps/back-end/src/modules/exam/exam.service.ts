import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createExamDto } from 'src/dtos/createExamDto.dto';
import { exam } from 'src/entities/Exam.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExamService {
    constructor(@InjectRepository(exam) private examRepository: Repository<exam>){}



    async createExams(examInfoArray: createExamDto[]) {
        const newExamArray =  examInfoArray.map((dto) =>
          this.examRepository.create(dto),
        );
        return this.examRepository.save(newExamArray);
      }

}
