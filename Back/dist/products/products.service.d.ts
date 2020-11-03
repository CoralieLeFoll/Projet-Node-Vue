import { Model } from 'mongoose';
import { Product } from './Schemas/Product';
import { ProductSchema } from './Schemas/schema.product';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<Product>);
    create(product: ProductSchema): Promise<Product>;
    findAll(): Promise<Product[]>;
    find(id: string): Promise<Product>;
    put(id: string, product: ProductSchema): Promise<Product>;
    remove(id: string): Promise<Product>;
    removeAll(): Promise<void>;
}
