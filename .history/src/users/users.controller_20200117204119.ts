import { Controller, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ICreateUserDto } from './interfaces/user';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: ICreateUserDto) {
    await this.usersService.create(createUserDto);
  }
}
