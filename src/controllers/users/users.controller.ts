import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/users.dto';
import { UsersService } from 'src/services/users/users.service';

@Controller('users')
export class UsersController {

  constructor(private userService: UsersService){

  }

  @Get('/')
  getUsers(@Query('sortBy') sortBy:string, @Query('sortDesc') sortDesc?: boolean){
    return this.userService.fetchUser()
  }

  @Get('user/:id')
  getUserByid(@Param('id', ParseIntPipe) id:number){
    return [ { userName: "any", email: "any@gmail.com", id } ]
  }
  //validation
  @Post('/create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData:CreateUserDto){
    return userData
  }

}
