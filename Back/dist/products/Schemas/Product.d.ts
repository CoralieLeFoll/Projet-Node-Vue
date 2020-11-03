import { Document } from 'mongoose';
export declare class Product extends Document {
    name: string;
    price: number;
    description: string;
}
export declare const ProductSchema: any;
