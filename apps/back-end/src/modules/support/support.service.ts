import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createSupportDto } from 'src/dtos/createSupportDto.dto';
import { support } from 'src/entities/support.entity';
import { ticket } from 'src/entities/ticket.entity';
import { Not, Repository } from 'typeorm';

@Injectable()
export class SupportService {
    constructor(@InjectRepository(support) private supportRepository: Repository<support>,
                @InjectRepository(ticket) private ticketRepository: Repository<ticket>){}


    createSupport(createSupportDto:createSupportDto){
        
        const newSupport = this.supportRepository.create({ ...createSupportDto});
        return this.supportRepository.save(newSupport)
    }

    async createSupportEmployees(createSupportDtoArray: createSupportDto[]) {
        const newSupportArray = createSupportDtoArray.map((dto) =>
          this.supportRepository.create(dto),
        );
        return this.supportRepository.save(newSupportArray);
      }

      async viewTickets(): Promise<ticket[]>{
        
        const tickets =  await this.ticketRepository.find({where:{status:'open', type:Not('password')}});
        if (tickets.length > 0){
          return tickets;
        }else{
          throw new Error('No tickets found');
        }
  
      }

      async viewMyTickets(supportName:string): Promise<ticket[]>{
        const tickets =  await this.ticketRepository.find({where:{employee:supportName}});
        if (tickets.length > 0){
          return tickets;
        }else{
          throw new Error('No tickets found');
        }
  
      }

      async viewTicketDetails(ticketID:string){
        const ticket = this.ticketRepository.findOne({where:{id:ticketID}});
        if (ticket){
          return ticket;
        }else{
          throw new Error('Ticket not found');
        }

      }

      async acceptTicket(ticketID:string,support:string){
        const ticket = await this.ticketRepository.findOne({where:{id:ticketID}});
        if (ticket) {
          ticket.status = 'In progress';
          ticket.employee = support;
          this.ticketRepository.save(ticket);
        } else {
          throw new Error('ticket not found');
        }
      }

      async reopenTicket(ticketID:string){
        const ticket = await this.ticketRepository.findOne({where:{id:ticketID}});
        if (ticket) {
          ticket.status = 'Open';
          ticket.employee = null;
          this.ticketRepository.save(ticket);
        } else {
          throw new Error('ticket not found');
        }
      }

      async closeTicket(ticketID:string){
        const ticket = await this.ticketRepository.findOne({where:{id:ticketID}});
        if (ticket) {
          ticket.status = 'Closed';
          this.ticketRepository.save(ticket);
        } else {
          throw new Error('ticket not found');
        }
      }




    }




