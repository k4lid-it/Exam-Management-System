import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { student } from 'src/entities/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  imports: [TypeOrmModule.forFeature([student])],
})
export class StudentModule {}
