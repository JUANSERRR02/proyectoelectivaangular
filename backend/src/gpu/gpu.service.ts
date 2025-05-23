import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gpu } from './gpu.schema';

@Injectable()
export class GpuService {
  constructor(@InjectModel(Gpu.name) private readonly gpuModel: Model<Gpu>) {}

  async create(gpuData: Partial<Gpu>): Promise<Gpu> {
    const createdGpu = new this.gpuModel(gpuData);
    return createdGpu.save();
  }

  async findAll(): Promise<Gpu[]> {
    return this.gpuModel.find().exec();
  }

  async findOne(id: string): Promise<Gpu> {
    const gpu = await this.gpuModel.findById(id).exec();
    if (!gpu) {
      throw new Error('GPU not found');
    }
    return gpu;
  }

  async update(id: string, gpuData: Partial<Gpu>): Promise<Gpu> {
    const updatedGpu = await this.gpuModel
      .findByIdAndUpdate(id, gpuData, { new: true })
      .exec();
    if (!updatedGpu) {
      throw new Error('GPU not found');
    }
    return updatedGpu;
  }

  async delete(id: string): Promise<void> {
    await this.gpuModel.findByIdAndDelete(id).exec();
  }
}
