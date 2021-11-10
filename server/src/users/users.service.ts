import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.models';

@Injectable()
export class UsersService {


constructor(@InjectModel(User) private user:typeof User){}

async getAllUsers(){
    const users= await this.user.findAll();
    return users
}

}
