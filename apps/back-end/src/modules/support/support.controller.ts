import { Body, Controller, Get, Post, Query, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { SupportService } from './support.service';
import { AuthGuard } from '@nestjs/passport';
import { IntegerType } from 'typeorm';

@Controller('support')
export class SupportController {

    constructor(private supportService:SupportService){}

    @UseGuards(AuthGuard('jwt'))
    @Get('Home')
    getHomePage(@Req() req: any){
        if (req.user.userType === 'support'){
        return this.supportService.viewTickets()
        }else{
            throw new UnauthorizedException();
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('My-ticket')
    viewMyTickets(@Req() req: any){
        if (req.user.userType === 'support'){
            return this.supportService.viewMyTickets(req.user.name);
            }else{
                throw new UnauthorizedException();
            }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('ticket-details')
    viewTicketDetails(@Req() req: any, @Query('id') ticketID:number){
        if (req.user.userType === 'support'){
            return this.supportService.viewTicketDetails(ticketID);
            
        }else{
            throw new UnauthorizedException();
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('ticket-details')
    acceptTicket(@Req() req: any, @Body('ticketID') ticketID:number){
        if (req.user.userType === 'support'){
        const support = req.user.name;
        return this.supportService.acceptTicket(ticketID,support);
        }else{
            throw new UnauthorizedException();
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('ticket')
    reopenTicket(@Req() req: any, @Body('ticketID') ticketID:number){
        if (req.user.userType === 'support'){
            return this.supportService.reopenTicket(ticketID);
        }else{
            throw new UnauthorizedException();
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('ticket')
    closeTicket(@Req() req: any, @Body('ticketID') ticketID:number){
        if (req.user.userType === 'support'){
            return this.supportService.closeTicket(ticketID);
        }else{
            throw new UnauthorizedException();
        }
    }


    

    @Post()
    createSupportEmployees(@Body() supportInfo:any){
        return this.supportService.createSupportEmployees(supportInfo);
    }
}

