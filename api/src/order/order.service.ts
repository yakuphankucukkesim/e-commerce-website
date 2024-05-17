import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './order.schema';
import { CreateOrderDto } from './dtos/create-order.dto';

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) { }

    async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
        const createdOrder = new this.orderModel(createOrderDto);
        return createdOrder.save();
    }
}
