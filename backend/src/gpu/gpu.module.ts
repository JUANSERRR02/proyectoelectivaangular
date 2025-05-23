import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GpuController } from './gpu.controller';
import { GpuService } from './gpu.service';
import { Gpu, GpuSchema } from './gpu.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Gpu.name, schema: GpuSchema }]),
  ],
  controllers: [GpuController],
  providers: [GpuService],
})
export class GpuModule {}