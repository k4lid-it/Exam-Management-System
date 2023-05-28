import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createStudentDto } from 'src/dtos/createStudent.dto';
import { student } from 'src/entities/student.entity';
import { ticket } from 'src/entities/ticket.entity';


@Injectable()
export class StudentService {
    constructor(@InjectRepository(student) private studentRepository: Repository<student>){}
    createStudent(studentInfo: createStudentDto){
        
        const newStudnet = this.studentRepository.create({ ...studentInfo});
        return this.studentRepository.save(newStudnet)
    }

    async createStudents(createStudnetDtoArray: createStudentDto[]) {
      const newStudentArray = createStudnetDtoArray.map((dto) =>
        this.studentRepository.create(dto),
      );
      return this.studentRepository.save(newStudentArray);
    }

    viewStudents(): Promise<student[]>{
        return this.studentRepository.find();
  
      }


 


}
