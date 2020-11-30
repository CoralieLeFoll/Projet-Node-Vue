import { Document } from 'mongoose';
export declare class Order extends Document {
    customerId: string;
    products: Array<{
        productId: string;
        quantity: number;
    }>;
    totalPrice: number;
}
export declare const OrderSchema: any;
