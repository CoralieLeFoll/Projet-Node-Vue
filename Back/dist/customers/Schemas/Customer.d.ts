import { Document } from 'mongoose';
export declare class Customer extends Document {
    name: string;
    surname: string;
    birthdate: string;
    mail: string;
    password: string;
}
export declare const CustomerSchema: any;
