import { BaseEntity } from "typeorm";
export declare class JobLocation extends BaseEntity {
    location_id: number;
    street_address: string;
    city: string;
    country: string;
}
