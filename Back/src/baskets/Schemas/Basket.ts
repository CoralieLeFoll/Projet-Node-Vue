import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
 
@Schema()
export class Basket extends Document {
  @Prop()
    customerId: string;

    @Prop()
    productIds: Array<string>;
}

export const BasketSchema = SchemaFactory.createForClass(Basket);