import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { examSubmissionDto } from 'src/dtos/examSubmissionDto.dto';



@Controller('student')
export class StudentController {
    
    constructor(private studentService: StudentService){}


    @Post()
    createStudents(@Body() createStudent: any) {
    this.studentService.createStudents(createStudent)
    }

    @Get()
    viewStudents(){
        return this.studentService.viewStudents();
    }


    @Post('mock-exam')
    examSubmission(examSubmissionDto:examSubmissionDto){
        return this.studentService.examSubmission(examSubmissionDto);
    }



    

    
}
