import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createInvigilatorDto } from 'src/dtos/createInvigilator.dto';
import { createTicketDto } from 'src/dtos/createTicket.dto';
import { generatePasswordDto } from 'src/dtos/generatePassword.dto';
import { getStudnetsDto } from 'src/dtos/getStudents.dto';
import { markPresentSwitchDto } from 'src/dtos/markPresentSwitch.dto';
import { studentInfoDto } from 'src/dtos/studentInfo.dto';
import { exam } from 'src/entities/Exam.entity';
import { invigilator } from 'src/entities/invigilator.entity';
import { student } from 'src/entities/student.entity';
import { ticket } from 'src/entities/ticket.entity';
import { Repository } from 'typeorm';
import { studentDetailsDto } from 'src/dtos/studentDetails.dto';

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
      if (exams.length > 0){
        return exams;
      }else{
        throw new Error('no exams found');
      }
    }

    async getStudents(getStudnetsDto:getStudnetsDto) : Promise <student[]>{
      const students = await this.studentRepository.find({where:{room:getStudnetsDto.room,time:getStudnetsDto.time}});
      if (students.length > 0){
        return students;
      }else{
        throw new Error('no students found');
      }
    }

    async markPresent(studentID:string,invigilator:string){
      const studentRecords = await this.studentRepository.find({ where: {studentID} });
      const examRecords = await this.examRepository.find({where:{invigilator}});

      const now = new Date();
      const options = { hour: '2-digit', minute: '2-digit', hour12: true } as Intl.DateTimeFormatOptions;
      const currentTime = now.toLocaleTimeString([], options);

    const currentExam = examRecords.find((exam) => {
    const [startTime, endTime] = exam.time.split('-').map((time) => time.trim());
    return currentTime >= startTime && currentTime <= endTime;});

    const currentStudentRecord = studentRecords .find((student) => {
      const [startTime, endTime] = student.time.split('-').map((time) => time.trim());
      return currentTime >= startTime && currentTime <= endTime;});
      
      if(currentStudentRecord){
        if (currentStudentRecord.room === currentExam.room){
          currentStudentRecord.attendance = 'present';
        this.studentRepository.save(currentStudentRecord);
        }else{
          throw new Error("this is not the studnet's room please go to room "+currentStudentRecord.room);
        }
      }else{
        throw new Error('Student doesnt have an exam at the current time');
      }
      
    }

    async viewStudentDetails(studentDetailsDto: studentDetailsDto){
      const student = await this.studentRepository.findOne({ where: {name:studentDetailsDto.studentName, subject:studentDetailsDto.subject} });
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
      const student = await this.studentRepository.findOne({ where: {studentID:studentInfo.studentID, subject:studentInfo.subject} });
      if (student){
        student.report = studentInfo.report;
        this.studentRepository.save(student);
      }else{
        throw new Error('Student not found');
      }
    }


    async generatePassword(generatePassword:generatePasswordDto){
      const student = await this.studentRepository.findOne({ where: {studentID:generatePassword.studentID, subject:generatePassword.subject} });
      if(student){
        const slice = (student.name).substring(0,2)+(student.studentID).substring(3,7)
                      + generatePassword.salt+(student.subject).substring(2,6);

        const crypto = require('crypto'); 
        const hash = crypto.createHash('SHA-256');
        hash.update(slice);
        const hexHash = hash.digest('hex');
        const baseHash = Buffer.from(hexHash, 'hex').toString('base64');
        const password = baseHash.substring(12, 6);
        return {password};

      }
    }

    async markPresnetSwitch(markPresentSwitch:markPresentSwitchDto){
      const student = await this.studentRepository.findOne({where:{name:markPresentSwitch.name, subject:markPresentSwitch.subject}});
      student.attendance = 'present';
        this.studentRepository.save(student);
    }


}

