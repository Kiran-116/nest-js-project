import { Body, Controller, DefaultValuePipe, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { GetUserParamDto } from "./dto/get-user-param.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

// http://localhost:3000/users
@Controller('users')
export class UsersController {i

    constructor(private usersService: UsersService) {

    }

    @Get(':isMarried?')
    getUsers() {
        return this.usersService.getAllUsers();
    }

    @Post()
    creatUsers(@Body() user: CreateUserDto) {
        this.usersService.createUser(user);
    }
}