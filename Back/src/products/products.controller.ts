import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Product } from './Schemas/Product'
import  { ProductsService } from './products.service'
import { ProductSchema } from './Schemas/schema.product';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() product: ProductSchema) {
    return this.productsService.create(product);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.find(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() product: ProductSchema) {
    return this.productsService.put(id, product);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }

  @Delete()
  removeAll() {
    return this.productsService.removeAll();
  }
}
