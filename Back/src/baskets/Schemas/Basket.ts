import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
 
@Schema()
export class Basket extends Document {
  @Prop()
    customerId: string;

    @Prop()
    products: Array<{productId: string, quantity: number}>;
}

export const BasketSchema = SchemaFactory.createForClass(Basket);