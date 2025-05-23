import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MotherboardController } from './motherboard.controller';
import { MotherboardService } from './motherboard.service';
import { Motherboard, MotherboardSchema } from './motherboard.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Motherboard.name, schema: MotherboardSchema }]),
  ],
  controllers: [MotherboardController],
  providers: [MotherboardService],
})
export class MotherboardModule {}