import { CreateBussinessStreamDto } from './dto/create-bussiness-stream.dto';
import { UpdateBussinessStreamDto } from './dto/update-bussiness-stream.dto';
export declare class BussinessStreamService {
    create(createBussinessStreamDto: CreateBussinessStreamDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBussinessStreamDto: UpdateBussinessStreamDto): string;
    remove(id: number): string;
}
