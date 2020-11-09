import { Model } from 'mongoose';
import { Customer } from './Schemas/Customer';
import { CustomerSchema } from './Schemas/schema.customer';
import { LoginSchema } from './Schemas/schema.login';
export declare class CustomersService {
    private customerModel;
    constructor(customerModel: Model<Customer>);
    create(customer: CustomerSchema): Promise<Customer>;
    findAll(): Promise<Customer[]>;
    find(id: string): Promise<Customer>;
    put(id: string, customer: CustomerSchema): Promise<Customer>;
    remove(id: string): Promise<Customer>;
    removeAll(): Promise<void>;
    login(customer: LoginSchema): Promise<Customer>;
}
