import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  price: number;
  @Prop()
  description: string;
  @Prop()
  ingredient: string;
  @Prop({ required: true })
  quantity: number;
  @Prop()
  region: string;
  @Prop()
  alcoholRate: number;
  @Prop()
  cl: number;
  @Prop()
  shortExplanation: string;
  @Prop({ type: [{ type: 'ObjectId', ref: 'Category' }] })
  categories: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
