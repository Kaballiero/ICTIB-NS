import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IMicrosoftResponce } from './microsoftResponse';



@Controller('auth')
export class AuthController {

    constructor(private readonly authService : AuthService){}

    @Post('/callback/microsoft')
    async callBack(@Body() req: IMicrosoftResponce, @Res() res : Response){
        return this.authService.validate(req);    
    }

    @Get()
    getUrl(){
        return this.authService.getUrl();
    }

}
