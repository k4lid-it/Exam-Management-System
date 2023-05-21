import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { ticket } from 'src/entities/ticket.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TicketController],
  providers: [TicketService],
  imports: [TypeOrmModule.forFeature([ticket])]
})
export class TicketModule {}
