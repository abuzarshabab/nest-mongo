import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CrudService } from './crud.service'

class userInsert {
  name: string;
  email: string;
  password: string;
}

const mockData = { name: 'Abuzar', email: 'abuzarshabab@gamil.com', password: 'Abuzar@123' }

@Controller('user')
export class CrudController {
  constructor(private readonly crudService: CrudService) { }

  @Post()
  async create(@Body() body) {
    return this.crudService.create(body);
  }

  @Get()
  async findAll() {
    return this.crudService.findAll();
  }
  @Get('/:id')
  findById(@Param('id') id) {
    return this.crudService.findOne(id);
  }
}
