import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrator } from 'src/entities/Administrator.entity';
import { exam } from 'src/entities/Exam.entity';
import { ticket } from 'src/entities/ticket.entity';
import { student } from 'src/entities/student.entity';

@Module({
  controllers: [AdminController],
  providers: [AdminService],
  imports: [
  TypeOrmModule.forFeature([Administrator]), 
  TypeOrmModule.forFeature([exam]), 
  TypeOrmModule.forFeature([ticket]),
  TypeOrmModule.forFeature([student])]
})
export class AdminModule {}
