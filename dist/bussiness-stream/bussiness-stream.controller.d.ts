import { BussinessStreamService } from './bussiness-stream.service';
import { CreateBussinessStreamDto } from './dto/create-bussiness-stream.dto';
import { UpdateBussinessStreamDto } from './dto/update-bussiness-stream.dto';
export declare class BussinessStreamController {
    private readonly bussinessStreamService;
    constructor(bussinessStreamService: BussinessStreamService);
    create(createBussinessStreamDto: CreateBussinessStreamDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBussinessStreamDto: UpdateBussinessStreamDto): string;
    remove(id: string): string;
}
