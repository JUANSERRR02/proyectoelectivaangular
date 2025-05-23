import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Gpu extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  manufacturer: string;

  @Prop({ required: true })
  memory: number;

  @Prop()
  description?: string;
}

export const GpuSchema = SchemaFactory.createForClass(Gpu);