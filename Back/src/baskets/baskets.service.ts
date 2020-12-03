import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Basket } from './Schemas/Basket';
import { BasketSchema } from './Schemas/schema.basket';

var _ = require('lodash');

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
          basket.products.push({productId, quantity: 1})
            let newBasket = _(basket.products)
            .groupBy('productId')
            .map((objs, key) => {
                return {
                    'productId': key,
                    'quantity': _.sumBy(objs, 'quantity')
                }
            })
            .value();
          basket.products = newBasket
          basket = await this.basketModel.findByIdAndUpdate(basket._id, basket)
        });
      return basket
    }

    async delete(customerId: string, productId: string): Promise<Basket> {
      var basket = new BasketSchema()
      await this.basketModel.findOne({ customerId: customerId }).then(
        async basket => {
            let newBasket = _(basket.products)
            .groupBy('productId')
            .map((objs, key) => {
                return {
                    'productId': key,
                    'quantity': _.sumBy(objs, 'quantity') - 1
                }
            })
            .value();
          newBasket = _.dropWhile(newBasket, function(p) { return p.quantity <= 0; })
          basket.products = newBasket
          basket = await this.basketModel.findByIdAndUpdate(basket._id, basket)
        }
      );
      return basket
    }

    async remove(id: string): Promise<Basket> {
      var basket = new BasketSchema()
      await this.basketModel.findOne({ customerId: id }).then(
        async basket => {
          basket.products = []
          basket = await this.basketModel.findByIdAndUpdate(basket._id, basket)
        }
      );
      return basket
    }
}
