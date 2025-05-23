import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CpuService } from './cpu.service';
import { CpuController } from './cpu.controller';
import { CpuSchema } from './cpu.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cpu', schema: CpuSchema }]),
  ],
  providers: [CpuService],
  controllers: [CpuController],
})
export class CpuModule {}