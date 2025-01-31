import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class UsersService {
    constructor(@Inject(forwardRef(() => AuthService)) private readonly authService: AuthService) {}

    users: {id: number, name: string, email: string, gender: string, isMarried: boolean, password: string }[] = [
        {
            id: 1,
            name: "John",
            email: "john@gmail.com",
            gender: "male",
            isMarried: false,
            password: 'test1234'
        }, 
        {
            id: 2,
            name: "Mark",
            email: "mark@gmail.com",
            gender: "male",
            isMarried: true,
            password: 'test1234'
        }, 
        {
            id: 3,
            name: "Sarah",
            email: "sarah@gmail.com",
            gender: "female",
            isMarried: false,
            password: 'test1234'
        }, 
    ]

    getAllUsers() {
        if (this.authService.isAuthenticated) {
            return this.users;
        }
        return "You are not logged in!";
    }

    getUsersById(id: number) {
        return this.users.find(user => user.id === id);
    }

    createUser(user: {id: number, name: string, email: string, gender: string, isMarried: boolean, password: string }) {
        this.users.push(user);
    }
}