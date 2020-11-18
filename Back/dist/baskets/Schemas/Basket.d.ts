import { Document } from 'mongoose';
export declare class Basket extends Document {
    customerId: string;
    productIds: Array<string>;
}
export declare const BasketSchema: any;
