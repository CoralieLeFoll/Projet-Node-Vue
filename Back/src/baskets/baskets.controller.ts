import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { BasketSchema } from './Schemas/schema.basket';

@Controller('baskets')
export class BasketsController {
    constructor(private readonly basketsService: BasketsService) {}
 
    @Post()
    create(@Body() basket: BasketSchema) {
      return this.basketsService.create(basket);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.basketsService.findOne(id);
    }
  
    @Post('add')
    add(@Body() basket : { basketId, productId }) {
      return this.basketsService.add(basket.basketId, basket.productId);
    }

    @Post('delete')
    delete(@Body() basket : { basketId, productId }) {
      return this.basketsService.delete(basket.basketId, basket.productId);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.basketsService.remove(id);
    }
}