import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MotherboardModule } from './motherboard/motherboard.module';
import { CpuModule } from './cpu/cpu.module';
import { PsuModule } from './psu/psu.module';
import { GpuModule } from './gpu/gpu.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    MotherboardModule,
    CpuModule,
    PsuModule,
    GpuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
