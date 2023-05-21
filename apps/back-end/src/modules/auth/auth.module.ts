import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { InvigilatorModule } from 'src/modules/invigilator/invigilator.module';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { invigilator } from 'src/entities/invigilator.entity';
import { support } from 'src/entities/support.entity';
import { exam } from 'src/entities/Exam.entity';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth.constant';
import { JwtStrategy } from './jwt.strategy';
import { Administrator } from 'src/entities/Administrator.entity';

@Module({
  controllers: [AuthController],
  imports: [
  InvigilatorModule,
  TypeOrmModule.forFeature([invigilator]),
  TypeOrmModule.forFeature([support]),
  TypeOrmModule.forFeature([Administrator]),
  PassportModule,
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '120s' },
  })],
  providers: [
  AuthService,
  LocalStrategy,
  JwtStrategy
  ],})
export class AuthModule {


}
