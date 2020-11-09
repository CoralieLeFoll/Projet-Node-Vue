import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerSchema } from './Schemas/schema.customer';
import { LoginSchema } from './Schemas/schema.login';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() customer: CustomerSchema) {
    return this.customersService.create(customer);
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.find(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() customer: CustomerSchema) {
    return this.customersService.put(id, customer);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(id);
  }

  @Delete()
  removeAll() {
    return this.customersService.removeAll();
  }

  @Post('login')
  login(@Body() login: LoginSchema) {
    return this.customersService.login(login)
  }
}
