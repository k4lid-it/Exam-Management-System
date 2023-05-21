import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { SupportService } from './support.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('support')
export class SupportController {

    constructor(private supportService:SupportService){}

    @UseGuards(AuthGuard('jwt'))
    @Get('Home')
    getHomePage(){
        return this.supportService.viewTickets()
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('ticket')
    viewTicketDetails(@Req() req: any, @Body('ticketID') ticketID:string){
        if (req.user.userType === 'support'){
            return this.supportService.viewTicketDetails(ticketID);
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('ticket')
    acceptTicket(@Req() req: any, @Body('ticketID') ticketID:string){
        const support = req.user.name;
        return this.supportService.acceptTicket(ticketID,support);
    }


    

    @Post()
    createSupportEmployees(@Body() supportInfo:any){
        return this.supportService.createSupportEmployees(supportInfo);
    }
}

