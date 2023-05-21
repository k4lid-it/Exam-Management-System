import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { createTicketDto } from 'src/dtos/createTicket.dto';
import { solveTicketDto } from 'src/dtos/solveTicket.dto';

@Controller('ticket')
export class TicketController {
    constructor(private ticketService: TicketService){}

    @Get()
    viewTicket(@Body("id") ticketId: string){
        return this.ticketService.viewTicket(ticketId);
    }

    @Get('1')
    viewTickets(){
        return this.ticketService.viewTickets();
    }

    @Post()
    createTicket(@Body() ticketInfo:createTicketDto){
        return this.ticketService.createTicket(ticketInfo)
    }

    @Put()
    solveTicket(@Body("id") ticketId: string ){
        return this.ticketService.solveTicket(ticketId);
    }

    @Post('2')
    closeTicket(@Body("id") ticketId: string){
        return this.ticketService.closeTicket(ticketId);
    }

    
}
