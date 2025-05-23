import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Psu } from './psu.schema';
import { CreatePsuDto } from './dto/create-psu.dto';
import { UpdatePsuDto } from './dto/update-psu.dto';

@Injectable()
export class PsuService {
  constructor(@InjectModel(Psu.name) private readonly psuModel: Model<Psu>) {}

  async create(createPsuDto: CreatePsuDto): Promise<Psu> {
    const createdPsu = new this.psuModel(createPsuDto);
    return createdPsu.save();
  }

  async findAll(): Promise<Psu[]> {
    return this.psuModel.find().exec();
  }

  async findOne(id: string): Promise<Psu> {
    const psu = await this.psuModel.findById(id).exec();
    if (!psu) {
      throw new Error('PSU not found');
    }
    return psu;
  }

  async update(id: string, updatePsuDto: UpdatePsuDto): Promise<Psu> {
    const updatedPsu = await this.psuModel
      .findByIdAndUpdate(id, updatePsuDto, { new: true })
      .exec();
    if (!updatedPsu) {
      throw new Error('PSU not found');
    }
    return updatedPsu;
  }

  async remove(id: string): Promise<void> {
    await this.psuModel.findByIdAndDelete(id).exec();
  }
}
