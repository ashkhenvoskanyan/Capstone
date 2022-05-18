import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Company } from 'src/company/entities/company.entity';
import { getManager } from 'typeorm';
import { CompanyImageService } from './company-image.service';
import { CreateCompanyImageDto } from './dto/create-company-image.dto';
import { UpdateCompanyImageDto } from './dto/update-company-image.dto';
import { CompanyImage } from './entities/company-image.entity';

@Controller('company-image')
export class CompanyImageController {
  constructor(private readonly companyImageService: CompanyImageService) {}

  @Post()
  create(@Body() createCompanyImageDto: CreateCompanyImageDto) {
    return this.companyImageService.create(createCompanyImageDto);
  }

  @Post('/upload')
  @UseInterceptors(
    FilesInterceptor('files', 5, {
      storage: diskStorage({
        destination: '../public/officePhotos/',
        filename: (_,file,cb) => {
          const fileNameSplit = file.originalname.split(".")
          const fileExt = fileNameSplit[fileNameSplit.length -1]
          // TODO: Add new request /upload-logo
          // 1. It should save under public/logos
          // 2. File name should be the company name
          cb(null, `${Date.now()}.${fileExt}`)
        }
      }),
    }))
  async uploadMultipleFiles(@Body() body: any, @UploadedFiles() files: Array<Express.Multer.File>){

    const response = []
    files.forEach(async ({ filename }) => {
      const fileReponse ={
        filename,
      }
      //console.log(fileReponse)
      // TODO: Save in db

      response.push(fileReponse);

      const {company_id} = body
      const CompanyRepo = getManager().getRepository(Company)
      const company = await CompanyRepo.findOne({id:company_id})
      const PhotosRepo = getManager().getRepository(CompanyImage);
      const photos = PhotosRepo.create({
        company,
        company_image: filename
      
      })
      await PhotosRepo.save(photos)

      
      
    })
    //console.log(response)

    return response
  }

  @Post('/uploadLogo')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: '../public/logoPhoto',
        filename: (req,file,cb) => {
          const fileNameSplit = file.originalname.split(".")
          const fileExt = fileNameSplit[fileNameSplit.length - 1]
          cb(null, `${req.body.company_name}.${fileExt}`)
          console.log(req.body)
        }
      }),
    })
  )
  async uploadedFile(@Body() body: any, @UploadedFile() file: Express.Multer.File){
    //console.log(file)
    const response = {
      filename: file.filename,
    };

    const {company_id} = body
    const CompanyRepo = getManager().getRepository(Company)
    const company = await CompanyRepo.findOne({id:company_id})
    const PhotosRepo = getManager().getRepository(CompanyImage);
    const photos = PhotosRepo.create({
      company,
      company_image: file.filename
    })
    await PhotosRepo.save(photos)

    return response
    
  }

  @Get()
  findAll() {
    return this.companyImageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyImageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyImageDto: UpdateCompanyImageDto) {
    return this.companyImageService.update(+id, updateCompanyImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyImageService.remove(+id);
  }
}
