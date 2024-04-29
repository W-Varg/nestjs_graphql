import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BaseCrudService } from './base-crud.service';

@Module({
  providers: [PrismaService, BaseCrudService],
  exports: [PrismaService, BaseCrudService],
})
export class PrismaModule {}
