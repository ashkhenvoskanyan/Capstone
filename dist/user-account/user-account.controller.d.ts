import { UserAccountService } from './user-account.service';
import { CreateUserAccountDto } from './dto/create-user-account.dto';
import { UpdateUserAccountDto } from './dto/update-user-account.dto';
export declare class UserAccountController {
    private readonly userAccountService;
    constructor(userAccountService: UserAccountService);
    create(createUserAccountDto: CreateUserAccountDto): Promise<import("./entities/user-account.entity").UserAccount>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserAccountDto: UpdateUserAccountDto): string;
    remove(id: string): string;
}
