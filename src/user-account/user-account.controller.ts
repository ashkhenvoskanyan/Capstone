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
import * as AuthController from '../user-account/auth.controller'


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
    const accessToken = await AuthController.login(password, user)

    return {status: "OK", accessToken}
  }

  // @Post('/uploadProfilePhoto')
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: '../public/ProfilePhoto',
  //       filename: (_,file,cb) => {
  //         const fileNameSplit = file.originalname.split(".")
  //         const fileExt = fileNameSplit[fileNameSplit.length - 1]
  //         cb(null, `${Date.now()}.${fileExt}`)
  //       }
  //     }),
  //   })
  // )
  // async uploadedFile(@Body() body: any, @UploadedFile() file: Express.Multer.File){
  //   // console.log(file)
  //   const response = {
  //     filename: file.filename,
  //   };

  //   // const {company_id} = body
  //   // const CompanyRepo = getManager().getRepository(Company)
  //   // const company = await CompanyRepo.findOne({id:company_id})
  //   const PhotosRepo = getManager().getRepository(UserAccount);
  //   const photos = PhotosRepo.create({
  //     user_image: file.filename
  //   })
  //   await PhotosRepo.save(photos)

  //   return response
    
  // }

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
      { select: ["email", "password", "id", "user_type"]},
    )
    if(!user){
      throw new BadRequestException("Invalid email")
    }
    return user
  }

  
}
