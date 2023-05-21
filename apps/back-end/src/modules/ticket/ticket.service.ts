import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';
import { createTicketDto } from 'src/dtos/createTicket.dto';
import { ticket } from 'src/entities/ticket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketService {
    constructor(@InjectRepository(ticket) private ticketRepository: Repository<ticket>){}

    createTicket(ticketInfo:createTicketDto){
        const newTicket = this.ticketRepository.create({ ...ticketInfo});
        return this.ticketRepository.save(newTicket)
    }

    async viewTicket(ticketId: string){
        const ticket = await this.ticketRepository.findOne({where: {id : ticketId} });
        if (ticket){
          return ticket;
        }else{
          throw new Error('ticket not found');
        }

    }

    viewTickets(): Promise<ticket[]>{
      return this.ticketRepository.find();

    }

    async solveTicket(ticketId: string){
        const ticket = await this.ticketRepository.findOne({where: {id: ticketId}});
        
        if (ticket) {
            ticket.status = 'In progress';
            this.ticketRepository.save(ticket);
          } else {
            throw new Error('ticket not found');
          }

    }
    async closeTicket(ticketId: string){
        const ticket = await this.ticketRepository.findOne({where:{id:ticketId}});
        
        if (ticket) {
            ticket.status = 'solved';
            this.ticketRepository.save(ticket);
          } else {
            throw new Error('ticket not found');
          }

    }




}
