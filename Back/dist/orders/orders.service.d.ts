import { Model } from 'mongoose';
import { Order } from './Schemas/Order';
import { OrderSchema } from './Schemas/schema.order';
export declare class OrdersService {
    private orderModel;
    constructor(orderModel: Model<Order>);
    create(order: OrderSchema): Promise<Order>;
    findbyCustomer(id: string): Promise<Order>;
    remove(id: string): Promise<Order>;
}
