import { BasketsService } from './baskets.service';
import { BasketSchema } from './Schemas/schema.basket';
export declare class BasketsController {
    private readonly basketsService;
    constructor(basketsService: BasketsService);
    create(basket: BasketSchema): Promise<import("./Schemas/Basket").Basket>;
    findOne(id: string): Promise<import("./Schemas/Basket").Basket>;
    add(basket: {
        basketId: any;
        productId: any;
    }): Promise<import("./Schemas/Basket").Basket>;
    delete(basket: {
        basketId: any;
        productId: any;
    }): Promise<import("./Schemas/Basket").Basket>;
    remove(id: string): Promise<import("./Schemas/Basket").Basket>;
}
