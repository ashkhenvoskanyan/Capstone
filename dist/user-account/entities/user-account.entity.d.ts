import { BaseEntity } from "typeorm";
export declare class UserAccount extends BaseEntity {
    account_id: number;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    date_of_birth: Date;
    gender: string;
    is_active: boolean;
    contact_number: number;
}
