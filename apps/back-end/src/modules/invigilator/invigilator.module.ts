import { Module } from '@nestjs/common';
import { InvigilatorController } from './invigilator.controller';
import { InvigilatorService } from './invigilator.service';
import { invigilator } from 'src/entities/invigilator.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { exam } from 'src/entities/Exam.entity';
import { student } from 'src/entities/student.entity';
import { ticket } from 'src/entities/ticket.entity';

@Module({
  controllers: [InvigilatorController],
  providers: [InvigilatorService],
  exports: [InvigilatorService],
  imports: [
    TypeOrmModule.forFeature([invigilator]),
    TypeOrmModule.forFeature([exam]),
    TypeOrmModule.forFeature([student]),
    TypeOrmModule.forFeature([ticket]),
  ],
})
export class InvigilatorModule {}
