import { Model } from 'mongoose';
import { Basket } from './Schemas/Basket';
import { BasketSchema } from './Schemas/schema.basket';
export declare class BasketsService {
    private basketModel;
    constructor(basketModel: Model<Basket>);
    create(basket: BasketSchema): Promise<Basket>;
    findOne(id: string): Promise<Basket>;
    add(customerId: string, productId: string): Promise<Basket>;
    delete(customerId: string, productId: string): Promise<Basket>;
    remove(id: string): Promise<Basket>;
}
