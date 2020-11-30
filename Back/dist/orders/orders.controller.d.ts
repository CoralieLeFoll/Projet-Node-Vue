import { OrdersService } from './orders.service';
import { OrderSchema } from './Schemas/schema.order';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(basket: OrderSchema): Promise<import("./Schemas/Order").Order>;
    findOne(id: string): Promise<import("./Schemas/Order").Order>;
    remove(id: string): Promise<import("./Schemas/Order").Order>;
}
