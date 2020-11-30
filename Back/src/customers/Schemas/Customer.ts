import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
 
@Schema()
export class Customer extends Document {
  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  birthdate: string;

  @Prop()
  mail: string;
  
  @Prop()
  password: string;

  @Prop()
  isAdmin: boolean;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);