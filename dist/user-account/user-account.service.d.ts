import { CreateUserAccountDto } from './dto/create-user-account.dto';
import { UpdateUserAccountDto } from './dto/update-user-account.dto';
import { UserAccount } from './entities/user-account.entity';
export declare class UserAccountService {
    create(createUserAccountDto: CreateUserAccountDto): Promise<UserAccount>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserAccountDto: UpdateUserAccountDto): string;
    remove(id: number): string;
}
