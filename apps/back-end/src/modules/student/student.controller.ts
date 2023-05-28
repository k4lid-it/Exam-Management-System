import { Body, Controller, Get, Post } from '@nestjs/common';
import { createStudentDto } from 'src/dtos/createStudent.dto';
import { StudentService } from './student.service';


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



    

    
}
