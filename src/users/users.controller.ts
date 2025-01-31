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
    getUsers(
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number, 
        @Query('page', new DefaultValuePipe(1), ParseIntPipe,) pipe: number,
        @Param() param: GetUserParamDto
    ) {
        console.log(param);
        console.log(limit, pipe);
        return this.usersService.getAllUsers();
    }

    @Get(':id')
    getUsersById(@Param('id', ParseIntPipe) id: any) {          // This will be read as String. ParseIntPipe will convert it to number
        console.log(typeof id, id);
        return this.usersService.getUsersById(id);
    }

    @Post()
    creatUsers(@Body() user: CreateUserDto) {
        console.log(user);
        return `A new user with id ${user.id} has been created!`;
    }

    @Patch()
    updateUser(@Body() user: UpdateUserDto) {
        console.log(user);
        return "User Updated Successfully!";
    }
}