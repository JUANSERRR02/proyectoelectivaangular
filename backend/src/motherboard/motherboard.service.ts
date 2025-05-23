import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Motherboard } from './motherboard.schema';
import { CreateMotherboardDto } from './dto/create-motherboard.dto';
import { UpdateMotherboardDto } from './dto/update-motherboard.dto';

@Injectable()
export class MotherboardService {
  constructor(
    @InjectModel(Motherboard.name)
    private readonly motherboardModel: Model<Motherboard>,
  ) {}

  async create(
    createMotherboardDto: CreateMotherboardDto,
  ): Promise<Motherboard> {
    const newMotherboard = new this.motherboardModel(createMotherboardDto);
    return newMotherboard.save();
  }

  async findAll(): Promise<Motherboard[]> {
    return this.motherboardModel.find().exec();
  }

  async findOne(id: string): Promise<Motherboard> {
    const motherboard = await this.motherboardModel.findById(id).exec();
    if (!motherboard) {
      throw new Error(`Motherboard with ID ${id} not found`);
    }
    return motherboard;
  }

  async update(
    id: string,
    updateMotherboardDto: UpdateMotherboardDto,
  ): Promise<Motherboard> {
    const updatedMotherboard = await this.motherboardModel
      .findByIdAndUpdate(id, updateMotherboardDto, { new: true })
      .exec();

    if (!updatedMotherboard) {
      throw new Error(`Motherboard with ID ${id} not found`);
    }

    return updatedMotherboard;
  }

  async remove(id: string): Promise<void> {
    await this.motherboardModel.findByIdAndDelete(id).exec();
  }
}
