import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { CreateCpuDto } from './dto/create-cpu.dto';
import { UpdateCpuDto } from './dto/update-cpu.dto';
import { Cpu } from './cpu.schema';

@Controller('/api/cpu')
export class CpuController {
  constructor(private readonly cpuService: CpuService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createCpuDto: CreateCpuDto): Promise<Cpu> {
    return this.cpuService.create(createCpuDto);
  }

  @Get()
  async findAll(): Promise<Cpu[]> {
    return this.cpuService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cpu> {
    return this.cpuService.findOne(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() updateCpuDto: UpdateCpuDto): Promise<Cpu> {
    return this.cpuService.update(id, updateCpuDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.cpuService.remove(id);
  }
}