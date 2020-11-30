import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './Schemas/Order';
import { OrderSchema } from './Schemas/schema.order';

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

    async create(order: OrderSchema): Promise<Order> {
      const createdOrder = new this.orderModel(order);
      return createdOrder.save();
    }

    async findbyCustomer(id: string): Promise<Order> {
      return this.orderModel.find({ customerId: id }).exec();
    }

    async remove(id: string): Promise<Order> {
        return this.orderModel.findByIdAndDelete(id);
      }
}
