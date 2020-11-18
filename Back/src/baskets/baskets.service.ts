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
      return this.basketModel.findById(id);
    }

    async add(basketId: string, productId: string): Promise<Basket> {
      var basket = new BasketSchema()
      await this.basketModel.findById(basketId).then(
        async basket => {
          basket.productIds.push(productId);
          basket = await this.basketModel.findByIdAndUpdate(basketId, basket)
        }
      );
      return basket
    }

    async delete(basketId: string, productId: string): Promise<Basket> {
      var basket = new BasketSchema()
      await this.basketModel.findById(basketId).then(
        async basket => {
          var position = 0
          basket.productIds.forEach(products => {
            if(products == productId) {
              basket.productIds.splice(position, 1)
              return
            }
            position++
          });
          basket = await this.basketModel.findByIdAndUpdate(basketId, basket)
        }
      );
      return basket
    }

    async remove(id: string): Promise<Basket> {
      var basket = new BasketSchema()
      await this.basketModel.findById(id).then(
        async basket => {
          basket.productIds = []
          basket = await this.basketModel.findByIdAndUpdate(id, basket)
        }
      );
      return basket
    }
}
