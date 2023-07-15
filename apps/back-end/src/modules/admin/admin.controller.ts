import { Body, Controller, Get, Post, Query, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AuthGuard } from '@nestjs/passport';
import { changeInvigilatorDto } from 'src/dtos/changeInvigilator.dto';

@Controller('admin')
export class AdminController {

    constructor(private adminService: AdminService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get('Exams')
    viewExams(@Req() req: any) {
        if (req.user.userType === 'admin') {
            return this.adminService.viewExams();
        } else {
            throw new UnauthorizedException();
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('Exams')
    changeInvigilator(@Req() req: any, @Body() changeInvigilator: changeInvigilatorDto) {
        if (req.user.userType === 'admin') {
            return this.adminService.changeInvigilator(changeInvigilator);
        } else {
            throw new UnauthorizedException();
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('tickets')
    viewTickets(@Req() req: any) {
        if (req.user.userType === 'admin') {
            return this.adminService.viewTickets();
        } else {
            throw new UnauthorizedException();
        }
    }


    @UseGuards(AuthGuard('jwt'))
    @Get('My-ticket')
    viewMyTickets(@Req() req: any) {
        if (req.user.userType === 'admin') {
            return this.adminService.viewMyTickets(req.user.name);
        } else {
            throw new UnauthorizedException();
        }
    }


    @UseGuards(AuthGuard('jwt'))
    @Get('ticket-details')
    viewTicketDetails(@Req() req: any, @Query('id') ticketID: number) {
        if (req.user.userType === 'admin') {
            return this.adminService.viewTicketDetails(ticketID);
        } else {
            throw new UnauthorizedException();
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('ticket-accept')
    acceptTicket(@Req() req: any, @Body('ticketID') ticketID: number) {
        if (req.user.userType === 'admin') {
            const admin = req.user.name;
            return this.adminService.acceptTicket(ticketID, admin);
        } else {
            throw new UnauthorizedException();
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('ticket-reopen')
    reopenTicket(@Req() req: any, @Body('ticketID') ticketID: number) {
        if (req.user.userType === 'admin') {
            return this.adminService.reopenTicket(ticketID);
        } else {
            throw new UnauthorizedException();
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('ticket-close')
    closeTicket(@Req() req: any, @Body('ticketID') ticketID: number) {
        if (req.user.userType === 'admin') {
            return this.adminService.closeTicket(ticketID);
        } else {
            throw new UnauthorizedException();
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('student-details')
    viewStudentDetails(@Req() req: any, @Query('id') studentID: string) {
        if (req.user.userType === 'admin') {
            return this.adminService.viewStudentDetails(studentID);
        } else {
            throw new UnauthorizedException();
        }
    }






    @Post()
    createAdmins(@Body() createAdmin: any) {
        this.adminService.createAdmins(createAdmin)
    }
}
