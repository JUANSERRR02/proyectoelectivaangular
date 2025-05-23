import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { MotherboardService } from './motherboard.service';
import { CreateMotherboardDto } from './dto/create-motherboard.dto';
import { UpdateMotherboardDto } from './dto/update-motherboard.dto';
import { Motherboard } from './motherboard.schema';

@Controller('/api/motherboards')
export class MotherboardController {
  constructor(private readonly motherboardService: MotherboardService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createMotherboardDto: CreateMotherboardDto): Promise<Motherboard> {
    return this.motherboardService.create(createMotherboardDto);
  }

  @Get()
  async findAll(): Promise<Motherboard[]> {
    return this.motherboardService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Motherboard> {
    return this.motherboardService.findOne(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() updateMotherboardDto: UpdateMotherboardDto): Promise<Motherboard> {
    return this.motherboardService.update(id, updateMotherboardDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.motherboardService.remove(id);
  }
}