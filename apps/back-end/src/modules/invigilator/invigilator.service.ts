import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createInvigilatorDto } from 'src/dtos/createInvigilator.dto';
import { createTicketDto } from 'src/dtos/createTicket.dto';
import { generatePasswordDto } from 'src/dtos/generatePassword.dto';
import { getStudnetsDto } from 'src/dtos/getStudents.dto';
import { studentInfoDto } from 'src/dtos/studentInfo.dto';
import { exam } from 'src/entities/Exam.entity';
import { invigilator } from 'src/entities/invigilator.entity';
import { student } from 'src/entities/student.entity';
import { ticket } from 'src/entities/ticket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InvigilatorService {
    constructor(@InjectRepository(invigilator) private invigilatorRepository: Repository<invigilator>,
                @InjectRepository(exam) private examRepository: Repository<exam>,
                @InjectRepository(student) private studentRepository: Repository<student>,
                @InjectRepository(ticket) private ticketRepository: Repository<ticket>){}


    createInvigilator(invigilatorInfo: createInvigilatorDto){
        
        const newInvigilator = this.invigilatorRepository.create({ ...invigilatorInfo});
        return this.invigilatorRepository.save(newInvigilator)
    }

    async createInvigilators(createInvigilatorDtoArray: createInvigilatorDto[]) {
        const newInvigilatorArray = createInvigilatorDtoArray.map((dto) =>
          this.invigilatorRepository.create(dto),
        );
        return this.invigilatorRepository.save(newInvigilatorArray);
      }

    async findById(invigilatorEmail:string){
        const invigilator = await this.invigilatorRepository.findOne({where: {email:invigilatorEmail}});
        return invigilator;
    }

    async viewExams(invigilatorName:string): Promise <exam[]> {
      const exams = await this.examRepository.find({where:{invigilator:invigilatorName}});
      if (exams){
        return exams;
      }else{
        throw new Error('no exams found');
      }
    }

    async getStudents(getStudnetsDto:getStudnetsDto) : Promise <student[]>{
      const students = await this.studentRepository.find({where:{room:getStudnetsDto.room,time:getStudnetsDto.time}});
      if (students){
        return students;
      }else{
        throw new Error('no students found');
      }
    }

    async markPresent(studentID:string,invigilator:string){
      const student = await this.studentRepository.findOne({ where: {studentID} });
      const exam = await this.examRepository.findOne({where:{invigilator}})
      if (student && student.time === exam.time && student.room === exam.room) {
        student.attendance = 'present';
        this.studentRepository.save(student);
      } else {
        throw new Error('Student not found');
      }
    }

    async viewStudentDetails(studentName:string){
      const student = await this.studentRepository.findOne({ where: {name:studentName} });
      if (student){
        return student
      }else{
        throw new Error('Student not found');
      }
    }

    createTicket(ticketInfo:createTicketDto){
      const newTicket = this.ticketRepository.create({ ...ticketInfo});
      return this.ticketRepository.save(newTicket)
  }

    async writeReport(studentInfo:studentInfoDto){
      const student = await this.studentRepository.findOne({ where: {studentID:studentInfo.studentID, exam:studentInfo.exam} });
      if (student){
        student.note = studentInfo.report;
        this.studentRepository.save(student);
      }else{
        throw new Error('Student not found');
      }
    }


    async generatePassword(generatePassword:generatePasswordDto){
      const student = await this.studentRepository.findOne({ where: {studentID:generatePassword.studentID, exam:generatePassword.exam} });
      if(student){
        const slice = (student.name).substring(0,2)+(student.studentID).substring(3,7)
                      + generatePassword.salt+(student.exam).substring(2,6);

        const crypto = require('crypto');                  

      }
    }






}
