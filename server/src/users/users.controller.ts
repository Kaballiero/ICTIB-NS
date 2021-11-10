import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { throwIfEmpty } from 'rxjs';
import { UsersService } from './users.service';
import { User } from './users.models';
@Controller('users')
export class UsersController {

constructor(private usersService: UsersService){}

@ApiOperation({summary:'Получение пользователей'})
@ApiResponse({status:200, type: [User]})
    @Get()
    getall(){
        return this.usersService.getAllUsers()
    }
}
