import { Controller, Get, Param} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    getUsers(){
        return this.userService.getUsers();
    }

    @Get(':isAdmin')
    createUser(@Param() params){
        return this.userService.createUser(params.isAdmin)
    }

}
