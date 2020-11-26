import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Basket } from './Schemas/Basket';
import { BasketSchema } from './Schemas/schema.basket';

@Injectable()
export class BasketsService {
    constructor(@InjectModel(Basket.name) private basketModel: Model<Basket>) {}

    async create(basket: BasketSchema): Promise<Basket> {
      const createdBasket = new this.basketModel(basket);
      return createdBasket.save();
    }

    async findOne(id: string): Promise<Basket> {
      return this.basketModel.findOne({ customerId: id }).exec();
    }

    async add(customerId: string, productId: string): Promise<Basket> {
      var basket = new BasketSchema()
      await this.basketModel.findOne({ customerId: customerId }).exec().then(
        async basket => {
          var newProduct = true
          basket.products.forEach(async products => {
            if(products.productId == productId) {
              newProduct = false
              products.quantity += 1
              return
            }
          });
          if(newProduct) {
            basket.products.push({productId, quantity: 1})
          }
          basket = await this.basketModel.findByIdAndUpdate(basket._id, basket)
        });
      return basket
    }

    async delete(customerId: string, productId: string): Promise<Basket> {
      var basket = new BasketSchema()
      await this.basketModel.findOne({ customerId: customerId }).then(
        async basket => {
          var position = 0
          basket.products.forEach(products => {
            if(products.productId == productId) {
              if (products.quantity > 1) {
                products.quantity -= 1
              }
              else {
                basket.products.splice(position, 1)
              }
              return
            }
            position++
          });
          basket = await this.basketModel.findByIdAndUpdate(basket._id, basket)
        }
      );
      return basket
    }

    async remove(id: string): Promise<Basket> {
      var basket = new BasketSchema()
      await this.basketModel.findOne({ customerId: id }).then(
        async basket => {
          console.log(basket)
          basket.products = []
          basket = await this.basketModel.findByIdAndUpdate(basket._id, basket)
        }
      );
      return basket
    }
}
