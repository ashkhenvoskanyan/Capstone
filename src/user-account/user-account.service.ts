import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { CreateUserAccountDto } from './dto/create-user-account.dto';
import { UpdateUserAccountDto } from './dto/update-user-account.dto';
import { UserAccount } from './entities/user-account.entity';
import { hash } from 'bcrypt';
import { SeekerProfile } from 'src/seeker-profile/entities/seeker-profile.entity';

enum UserType {
  admin = 1,
  seeker =2
}


@Injectable()
export class UserAccountService {
  async create(createUserAccountDto: CreateUserAccountDto) {
    console.log(createUserAccountDto);
   const { first_name, last_name, email, password, date_of_birth = new Date(), gender, is_active, contact_number, user_type} = createUserAccountDto;
   
  const UserRepo = getManager().getRepository(UserAccount);
  const passwordHash = await hash(password, 10);
  const user = UserRepo.create({ 
    email, 
    password: passwordHash, 
    date_of_birth, 
    gender, 
    is_active, 
    contact_number
  })

  if(user_type === UserType.seeker){
    const seekerRepo = getManager().getRepository(SeekerProfile);
    const seeker = seekerRepo.create({first_name, last_name})
    await seekerRepo.save(seeker)
  }
  //console.log(first_name, user)
  await UserRepo.save(user)
   return user
  }

  findAll() {
    return `This action returns all userAccount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAccount`;
  }

  update(id: number, updateUserAccountDto: UpdateUserAccountDto) {
    return `This action updates a #${id} userAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAccount`;
  }
}
