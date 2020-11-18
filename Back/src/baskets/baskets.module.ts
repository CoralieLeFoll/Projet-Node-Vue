import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BasketsController } from './baskets.controller';
import { BasketsService } from './baskets.service';
import { Basket, BasketSchema } from './Schemas/Basket';

@Module({
    imports: [MongooseModule.forFeature([{ name: Basket.name, schema: BasketSchema }])],
    controllers: [BasketsController],
    providers: [BasketsService],
  })
export class BasketsModule {}
