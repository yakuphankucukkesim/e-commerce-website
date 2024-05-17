import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
    @Prop({ required: true })
    productName: string;

    @Prop({ required: true })
    quantity: number;

    @Prop({ required: true })
    totalPrice: number;

    @Prop({ required: true })
    date: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
