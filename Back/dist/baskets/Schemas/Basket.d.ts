import { Document } from 'mongoose';
export declare class Basket extends Document {
    customerId: string;
    products: Array<{
        productId: string;
        quantity: number;
    }>;
}
export declare const BasketSchema: any;
