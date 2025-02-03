import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString({message: "First Name should be a string value?"})
    @IsNotEmpty()
    @MinLength(3, {message: "First Name should have a minimum of 3 characters."})
    @MaxLength(100)
    firstname: string;

    @IsString({message: "Last Name should be a string value?"})
    @IsNotEmpty()
    @MaxLength(100)
    @MinLength(3, {message: "Last Name should have a minimum of 3 characters."})
    lastname: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
    email: string;

    @IsNotEmpty()
    @MaxLength(24)
    username: string;

    @IsString()
    @IsOptional()
    gender?: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(100)
    password: string;
}