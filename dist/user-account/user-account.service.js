"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccountService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_account_entity_1 = require("./entities/user-account.entity");
const bcrypt_1 = require("bcrypt");
let UserAccountService = class UserAccountService {
    async create(createUserAccountDto) {
        console.log(createUserAccountDto);
        const { first_name, last_name, email, password, date_of_birth = new Date(), gender, is_active, contact_number } = createUserAccountDto;
        const UserRepo = (0, typeorm_1.getManager)().getRepository(user_account_entity_1.UserAccount);
        const passwordHash = await (0, bcrypt_1.hash)(password, 10);
        const user = UserRepo.create({
            first_name,
            last_name,
            email,
            password: passwordHash,
            date_of_birth,
            gender,
            is_active,
            contact_number
        });
        await UserRepo.save(user);
        return user;
    }
    findAll() {
        return `This action returns all userAccount`;
    }
    findOne(id) {
        return `This action returns a #${id} userAccount`;
    }
    update(id, updateUserAccountDto) {
        return `This action updates a #${id} userAccount`;
    }
    remove(id) {
        return `This action removes a #${id} userAccount`;
    }
};
UserAccountService = __decorate([
    (0, common_1.Injectable)()
], UserAccountService);
exports.UserAccountService = UserAccountService;
//# sourceMappingURL=user-account.service.js.map