import { Module } from '@nestjs/common';
import { ExamController } from './exam.controller';
import { ExamService } from './exam.service';
import { exam } from 'src/entities/Exam.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ExamController],
  providers: [ExamService],
  imports: [TypeOrmModule.forFeature([exam]),]
})
export class ExamModule {}
