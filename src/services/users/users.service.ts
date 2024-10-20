import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    fetchUser(){
    return [ { userName: "any", email: "any@gmail.com" } ]
    }
}
