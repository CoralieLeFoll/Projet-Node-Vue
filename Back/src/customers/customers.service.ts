import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './Schemas/Customer';
import { CustomerSchema } from './Schemas/schema.customer';
import { LoginSchema } from './Schemas/schema.login';

@Injectable()
export class CustomersService {
    constructor(@InjectModel(Customer.name) private customerModel: Model<Customer>) {}

    async create(customer: CustomerSchema): Promise<Customer> {
      const createdCustomer = new this.customerModel(customer);
      return createdCustomer.save();
    }
  
    async findAll(): Promise<Customer[]> {
      return this.customerModel.find().exec();
    }

    async find(id: string): Promise<Customer> {
      return this.customerModel.findById(id);
    }

    async put(id : string, customer: CustomerSchema ): Promise<Customer> {
      return this.customerModel.findByIdAndUpdate(id, customer)
    }

    async remove(id: string): Promise<Customer> {
      return this.customerModel.findByIdAndDelete(id);
    }

    async removeAll(): Promise<void> {
      const customers = await this.customerModel.find().exec();
      customers.forEach(async customer => {
        await this.customerModel.findByIdAndDelete(customer._id);
      });
    }

    async login(customer: LoginSchema): Promise<Customer> {
      return this.customerModel.findOne({ mail: customer.mail, password: customer.password });
    }
}
