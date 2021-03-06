import { CustomersService } from './customers.service';
import { CustomerSchema } from './Schemas/schema.customer';
import { LoginSchema } from './Schemas/schema.login';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    create(customer: CustomerSchema): Promise<import("./Schemas/Customer").Customer>;
    findAll(): Promise<import("./Schemas/Customer").Customer[]>;
    findOne(id: string): Promise<import("./Schemas/Customer").Customer>;
    update(id: string, customer: CustomerSchema): Promise<import("./Schemas/Customer").Customer>;
    remove(id: string): Promise<import("./Schemas/Customer").Customer>;
    removeAll(): Promise<void>;
    login(login: LoginSchema): Promise<import("./Schemas/Customer").Customer>;
}
