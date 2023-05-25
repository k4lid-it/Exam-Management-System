import { Body, Controller, Get, Post, Query, Req, UnauthorizedException, UseGuards, } from '@nestjs/common';
import { InvigilatorService } from './invigilator.service';
import { AuthGuard } from '@nestjs/passport';
import { getStudnetsDto } from 'src/dtos/getStudents.dto';
import { createTicketDto } from 'src/dtos/createTicket.dto';
import { generatePasswordDto } from 'src/dtos/generatePassword.dto';
import { studentInfoDto } from 'src/dtos/studentInfo.dto';
import { markPresentSwitchDto } from 'src/dtos/markPresentSwitch.dto';

@Controller('invigilator')
export class InvigilatorController {

    constructor(private invigilatorService:InvigilatorService){}


    @UseGuards(AuthGuard('jwt'))
    @Get('Home')
    getExams(@Req() req: any){
        if (req.user.userType === 'invigilator'){
        return this.invigilatorService.viewExams(req.user.name);
        }else{
            throw new UnauthorizedException();
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('Room')
    getStudnets(@Req() req: any, @Query() getStudnetsDto:getStudnetsDto ){
        if (req.user.userType === 'invigilator'){
        return this.invigilatorService.getStudents(getStudnetsDto);
        }else{
            throw new UnauthorizedException();
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('Room')
    markPresnetSwitch(@Req() req: any, @Body() markPresentSwitch:markPresentSwitchDto ){
        if (req.user.userType === 'invigilator'){
        return this.invigilatorService.markPresnetSwitch(markPresentSwitch);
        }else{
            throw new UnauthorizedException();
        }
    }



    @UseGuards(AuthGuard('jwt'))
    @Post('Room/Scanner')
    markPresnt(@Req() req: any, @Body('studentID') studentId:string ){
        if (req.user.userType === 'invigilator'){
            const invigilator = req.user.name;
            return this.invigilatorService.markPresent(studentId,invigilator);

        }else{
            throw new UnauthorizedException();
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('student-details')
    viewStudentDetails(@Req() req: any, @Query() studentName:string ){
        if (req.user.userType === 'invigilator'){
            return this.invigilatorService.viewStudentDetails(studentName);
            }else{
                throw new UnauthorizedException();
            }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('student-details')
    writeReport(@Req() req: any, @Body('studentName') studentInfo:studentInfoDto ){
        if (req.user.userType === 'invigilator'){
            return this.invigilatorService.writeReport(studentInfo);
            }else{
                throw new UnauthorizedException();
            }
    }


    @UseGuards(AuthGuard('jwt'))
    @Post('ticket')
    createTicket(@Req() req: any, @Body() ticketInfo:createTicketDto ){
        if (req.user.userType === 'invigilator'){
            return this.invigilatorService.createTicket(ticketInfo);
            }else{
                throw new UnauthorizedException();
            }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('generate-password')
    generatePassword(@Req() req: any, @Body() generatePassword:generatePasswordDto ){
        if (req.user.userType === 'invigilator'){
            return this.invigilatorService.generatePassword(generatePassword);
            }else{
                throw new UnauthorizedException();
            }
    }







    @Post()
    createInvigilators(@Body() createInvigilator: any) {
    this.invigilatorService.createInvigilators(createInvigilator);
    }

}
