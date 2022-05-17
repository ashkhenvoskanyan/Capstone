import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, HttpException, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UserAccountService } from './user-account.service';
import { CreateUserAccountDto } from './dto/create-user-account.dto';
import { UpdateUserAccountDto } from './dto/update-user-account.dto';
import { async } from 'rxjs';
import { getManager } from 'typeorm';
import { UserAccount } from './entities/user-account.entity';
import { compare } from 'bcrypt'
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('user-account')
export class UserAccountController {
  constructor(private readonly userAccountService: UserAccountService) {}

  @Post('/register')
  create(@Body() createUserAccountDto: CreateUserAccountDto){
    return this.userAccountService.create(createUserAccountDto)
  }
  
  @Post('/login')
  async login( @Body() loginDataDto: UpdateUserAccountDto){
    const email = loginDataDto.email
    const password = loginDataDto.password
    const user = await this.getUserByEmail(email)
    const isCorrect = await this.comparePasswords(password, user.password)
    if(isCorrect){
      return user
    }
    else{
      throw new HttpException('Invalid Login or Password', HttpStatus.UNAUTHORIZED);
    }
    
  }

  @Post('/uploadProfilePhoto')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: '../public/ProfilePhoto',
        filename: (req,file,cb) => {
          const fileNameSplit = file.originalname.split(".")
          const fileExt = fileNameSplit[fileNameSplit.length - 1]
          cb(null, `${req.body.company_name}.${fileExt}`)
          console.log(req.body)
        }
      }),
    })
  )
  async uploadedFile( @UploadedFile() file: Express.Multer.File){
    console.log(file)
    const response = {
      
      filename: file.filename,
    };

    return response
    
  }

  @Get()
  findAll() {
    return this.userAccountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAccountService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserAccountDto: UpdateUserAccountDto) {
    return this.userAccountService.update(+id, updateUserAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAccountService.remove(+id);
  }

  getUserByEmail = async(email: string) => {
    const UserRepo = getManager().getRepository(UserAccount)
    const user = await UserRepo.findOne(
      { email },
      { select: ["email", "password", "account_id", "user_type"]},
    )
    if(!user){
      throw new BadRequestException("Invalid email")
    }
    return user
  }

  comparePasswords = async (password: string, userPassword: string) => {
    const passwordsMatch = await compare(password, userPassword)
    return passwordsMatch
  }
}
