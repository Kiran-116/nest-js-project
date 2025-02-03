import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    getAllUsers() {
        return this.userRepository.find();
    }

    public async createUser(userDto: CreateUserDto) {
        // Validate if a user exists with the given email
        const user = await this.userRepository.findOne({
            where: {
                email: userDto.email
            }
        })

        // Handle the Error / Exception
        if (user) {
            throw new Error("User already exists with the given email.");
        }

        // Create that User:
        let newUser = this.userRepository.create(userDto);
        newUser = await this.userRepository.save(newUser);
        
        return newUser;
    }
}