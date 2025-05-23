import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Cpu extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  cores: number;

  @Prop({ required: true })
  threads: number;

  @Prop({ required: true })
  clockSpeed: number;

  @Prop()
  description?: string;
}

export const CpuSchema = SchemaFactory.createForClass(Cpu);