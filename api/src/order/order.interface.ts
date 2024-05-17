import { Document } from 'mongoose';

export interface Order extends Document {
    productName: string;
    quantity: number;
    totalPrice: number;
}
