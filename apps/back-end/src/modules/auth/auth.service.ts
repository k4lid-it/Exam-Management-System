import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';
import { loginDto } from 'src/dtos/loginDto.dto';
import { Administrator } from 'src/entities/Administrator.entity';
import { exam } from 'src/entities/Exam.entity';
import { invigilator } from 'src/entities/invigilator.entity';
import { support } from 'src/entities/support.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(invigilator) private invigilatorRepository: Repository<invigilator>,
    @InjectRepository(support) private supportRepository: Repository<support>,
    @InjectRepository(Administrator) private adminRepository: Repository<Administrator>,
    private jwtService: JwtService) { }



  async validateUser(email: string, password: string): Promise<any> {

    const invigilatorUser = await this.invigilatorRepository.findOne({ where: { email } });
    if (invigilatorUser && invigilatorUser.password === password) {
      const user = { email: invigilatorUser.email, name: invigilatorUser.name, userType: 'invigilator' }
      return user;
    }

    const supportUser = await this.supportRepository.findOne({ where: { email } });
    if (supportUser && supportUser.password === password) {
      const user = { email: supportUser.email, name: supportUser.name, userType: 'support' }
      return user;
    }

    const adminUser = await this.adminRepository.findOne({ where: { email } })
    if (adminUser && adminUser.password === password) {
      const user = { email: adminUser.email, name: adminUser.name, userType: 'admin' }
      return user;
    }

    return null;
  }

  async login(user: any) {
    const payload = {
      email: user.email,
      sub: user.name,
      userType: user.userType
    };
    return {
      info: user,
      access_token: this.jwtService.sign(payload),
    };
  }
}



