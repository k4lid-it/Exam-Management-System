import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {

    constructor(private adminService:AdminService){}

    @Get()
    viewExams(){
        return this.adminService.viewExams();
    }
    

    @Post()
    createAdmins(@Body() createAdmin: any) {
    this.adminService.createAdmins(createAdmin)
    }
}
