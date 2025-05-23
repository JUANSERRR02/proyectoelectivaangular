import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PsuController } from './psu.controller';
import { PsuService } from './psu.service';
import { Psu, PsuSchema } from './psu.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Psu.name, schema: PsuSchema }])
  ],
  controllers: [PsuController],
  providers: [PsuService],
})
export class PsuModule {}