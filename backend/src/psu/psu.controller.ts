import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { PsuService } from './psu.service';
import { CreatePsuDto } from './dto/create-psu.dto';
import { UpdatePsuDto } from './dto/update-psu.dto';
import { Psu } from './psu.schema';

@Controller('/api/psu')
export class PsuController {
  constructor(private readonly psuService: PsuService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createPsuDto: CreatePsuDto): Promise<Psu> {
    return this.psuService.create(createPsuDto);
  }

  @Get()
  async findAll(): Promise<Psu[]> {
    return this.psuService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Psu> {
    return this.psuService.findOne(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() updatePsuDto: UpdatePsuDto): Promise<Psu> {
    return this.psuService.update(id, updatePsuDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.psuService.remove(id);
  }
}