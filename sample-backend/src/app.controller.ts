import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/user')
  createUser(@Body() createUserDto: CreateUserDto) {
    this.appService.createUser(createUserDto);
  }

  @Get('/analytics')
  getAnalytics() {
    return this.appService.getAnalytics();
  }
}
