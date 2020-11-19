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
    add(@Body() basket : { customerId, productId }) {
      return this.basketsService.add(basket.customerId, basket.productId);
    }

    @Post('delete')
    delete(@Body() basket : { customerId, productId }) {
      return this.basketsService.delete(basket.customerId, basket.productId);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.basketsService.remove(id);
    }
}