import { Product } from './Schemas/Product';
import { ProductsService } from './products.service';
import { ProductSchema } from './Schemas/schema.product';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(product: ProductSchema): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    update(id: string, product: ProductSchema): Promise<Product>;
    remove(id: string): Promise<Product>;
    removeAll(): Promise<void>;
}
