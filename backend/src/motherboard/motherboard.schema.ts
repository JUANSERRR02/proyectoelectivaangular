import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Motherboard extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  socketType: string;

  @Prop({ required: true })
  formFactor: string;
}

export const MotherboardSchema = SchemaFactory.createForClass(Motherboard);