import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Psu extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  wattage: number;

  @Prop()
  efficiencyRating: string;

  @Prop()
  modular: boolean;
}

export const PsuSchema = SchemaFactory.createForClass(Psu);