import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {
          
      }

    getUsers(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async createUser(isAdmin: boolean): Promise<User> {
        const defaultUser: User = {
            isAdmin: isAdmin,
            isAdminAssistant: true,
            isDeleted: false,
            uuid: 1,
            couldBeTutor: true
        }

        await this.usersRepository.create(defaultUser);
        return defaultUser;
    }

    async requestUserData(){
        
    }
}
