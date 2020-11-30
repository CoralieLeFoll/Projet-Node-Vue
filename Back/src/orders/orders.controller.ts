import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderSchema } from './Schemas/schema.order';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}
 
    @Post()
    create(@Body() basket: OrderSchema) {
      return this.ordersService.create(basket);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.ordersService.findbyCustomer(id);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.ordersService.remove(id);
    }
}
