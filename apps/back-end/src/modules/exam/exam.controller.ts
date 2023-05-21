import { Body, Controller, Post } from '@nestjs/common';
import { ExamService } from './exam.service';

@Controller('exam')
export class ExamController {

    constructor(private examService:ExamService){}

    @Post()
    createExams(@Body() createExams: any) {
    this.examService.createExams(createExams)
    }
}
