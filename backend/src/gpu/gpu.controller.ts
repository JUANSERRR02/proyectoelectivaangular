// src/gpu/gpu.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GpuService } from './gpu.service';
import { Gpu } from './gpu.schema';

@Controller('/api/gpu')
export class GpuController {
  constructor(private readonly gpuService: GpuService) {}

  @Post()
  async create(@Body() gpuData: Partial<Gpu>): Promise<Gpu> {
    return this.gpuService.create(gpuData);
  }

  @Get()
  async findAll(): Promise<Gpu[]> {
    return this.gpuService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Gpu> {
    return this.gpuService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() gpuData: Partial<Gpu>): Promise<Gpu> {
    return this.gpuService.update(id, gpuData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.gpuService.delete(id);
  }
}