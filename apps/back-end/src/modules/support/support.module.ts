import { Module } from '@nestjs/common';
import { SupportController } from './support.controller';
import { SupportService } from './support.service';
import { support } from 'src/entities/support.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ticket } from 'src/entities/ticket.entity';

@Module({
  controllers: [SupportController],
  providers: [SupportService],
  imports: [TypeOrmModule.forFeature([support]),TypeOrmModule.forFeature([ticket])]
})
export class SupportModule {}
