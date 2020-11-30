import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
 
@Schema()
export class Order extends Document {
    @Prop()
    customerId: string;

    @Prop()
    products: Array<{productId: string, quantity: number}>;

    @Prop()
    totalPrice: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);