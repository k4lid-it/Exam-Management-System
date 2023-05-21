import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
    constructor( 
        private authService: AuthService){}

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Request() req){
        return this.authService.login(req.user);
      }
}
