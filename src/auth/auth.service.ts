import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { AuthResponseDto } from './auth.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    signIn(username: string, password: string): AuthResponseDto {
        /* const foundUser = this.usersService.findByUserName(username); */
        return 
    }
}
