import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { student } from 'src/entities/student.entity'
import { StudentModule } from './modules/student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketModule } from './modules/ticket/ticket.module';
import { ticket } from './entities/ticket.entity';
import { exam } from './entities/Exam.entity';
import { invigilator } from './entities/invigilator.entity';
import { InvigilatorModule } from './modules/invigilator/invigilator.module';
import { support } from './entities/support.entity';
import { AuthModule } from './modules/auth/auth.module';
import { SupportModule } from './modules/support/support.module';
import { ExamModule } from './modules/exam/exam.module';
import { HomeModule } from './modules/home/home.module';
import { Administrator } from './entities/Administrator.entity';
import { AdminModule } from './modules/admin/admin.module';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'senior.mysql.database.azure.com',
    port: 3306,
    username: 'senior',
    password: 'ProjectPass1',
    database: 'auth_system',
    entities: [student, ticket, exam, invigilator, support, Administrator],
    synchronize: false,
  }),
  StudentModule,
  TicketModule,
  InvigilatorModule,
  AuthModule,
  SupportModule,
  ExamModule,
  HomeModule,
  AdminModule,
  ],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
