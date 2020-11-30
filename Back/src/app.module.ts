import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './products/products.module'
import { CustomerModule } from './customers/customers.module';
import { BasketsModule } from './baskets/baskets.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.fsx0k.mongodb.net/back?retryWrites=true&w=majority'),
  ProductModule, CustomerModule, BasketsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
