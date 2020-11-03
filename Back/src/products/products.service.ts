import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './Schemas/Product';
import { ProductSchema } from './Schemas/schema.product';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

    async create(product: ProductSchema): Promise<Product> {
      const createdProduct = new this.productModel(product);
      return createdProduct.save();
    }
  
    async findAll(): Promise<Product[]> {
      return this.productModel.find().exec();
    }

    async find(id: string): Promise<Product> {
      return this.productModel.findById(id);
    }

    async put(id : string, product: ProductSchema ): Promise<Product> {
      return this.productModel.findByIdAndUpdate(id, product)
    }

    async remove(id: string): Promise<Product> {
      return this.productModel.findByIdAndDelete(id);
    }

    async removeAll(): Promise<void> {
      const products = await this.productModel.find().exec();
      products.forEach(async product => {
        await this.productModel.findByIdAndDelete(product._id);
      });
    }
}
