import { BaseEntity } from "typeorm";
export declare class Company extends BaseEntity {
    company_id: number;
    company_name: string;
    profile_description: string;
    establishment_date: Date;
    company_website_url: string;
    bussines_stream_id: number;
}
