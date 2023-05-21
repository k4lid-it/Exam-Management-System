import { Controller, Get, UnauthorizedException, UseGuards, Request } from '@nestjs/common';
import { AuthGuard,  } from '@nestjs/passport';

@Controller('home')
export class HomeController {

    @UseGuards(AuthGuard('jwt'))
  @Get('home')
  async getHomePage(@Request() req) {
    const { userType } = req.user;
    if (userType === 'invigilator') {
      
    } else if (userType === 'support') {
      
    } else {
      throw new UnauthorizedException('Invalid user type');
    }
  }
}
