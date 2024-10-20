import { UsersController } from './../../controllers/users/users.controller';
import { Injectable, MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from 'src/middlewares/auth/auth.middleware';

@Injectable()
export class UsersService implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes(UsersController)
    }
    fetchUser(){
    return [ { userName: "any", email: "any@gmail.com" } ]
    }
}
