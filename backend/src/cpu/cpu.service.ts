import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCpuDto } from './dto/create-cpu.dto';
import { UpdateCpuDto } from './dto/update-cpu.dto';
import { Cpu } from './cpu.schema';

@Injectable()
export class CpuService {
  constructor(@InjectModel('Cpu') private readonly cpuModel: Model<Cpu>) {}

  async create(createCpuDto: CreateCpuDto): Promise<Cpu> {
    const createdCpu = new this.cpuModel(createCpuDto);
    return createdCpu.save();
  }

  async findAll(): Promise<Cpu[]> {
    return this.cpuModel.find().exec();
  }

  async findOne(id: string): Promise<Cpu> {
    const cpu = await this.cpuModel.findById(id).exec();
    if (!cpu) {
      throw new Error(`CPU with ID ${id} not found`);
    }
    return cpu;
  }

  async update(id: string, updateCpuDto: UpdateCpuDto): Promise<Cpu> {
    const updatedCpu = await this.cpuModel.findByIdAndUpdate(id, updateCpuDto, { new: true }).exec();
    if (!updatedCpu) {
      throw new Error(`CPU with ID ${id} not found`);
    }
    return updatedCpu;
  }

  async remove(id: string): Promise<void> {
    await this.cpuModel.findByIdAndDelete(id).exec();
  }
}