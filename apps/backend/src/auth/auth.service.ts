import { HttpService, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IMicrosoftResponce } from './microsoftResponse';


@Injectable()
export class AuthService {

    constructor(private httpService: HttpService,
                private jwtService: JwtService){}

    async validate(req : IMicrosoftResponce) {
        if (!req || (req && (!req.code || !req.session_state))) {
            return '((((((((((((';
        }
        //проверка валидности авторизации
        try{
            const accToken = (await this.httpService.post('https://login.microsoftonline.com/' + process.env.TENANT, { body:{client_id: process.env.CLIENT_ID,client_secret: process.env.CLIENT_ID,scope: "openid", redirect_uri: "http://localhost:5001/auth/callback/microsoft", grant_type: 'client_credentials', code: req.code, },}).toPromise()).data;
        

            if (!accToken || this.jwtService.decode(accToken.id_token) !== '') {
                return '((((((((((((((((((((((((';
            }
            //получить данные пользователя
            console.log(
                (await this.httpService.post('https://graph.microsoft.com/oidc/userinfo', {
                    headers: { Authorization: 'Bearer ' + accToken.access_token },
                })
            ).toPromise);
            const token = this.jwtService.decode(accToken.access_token);
            console.log(token);
            return token;
            //do some work
        }
        catch(e){
            return {message: '((((((((((((((((((((((((', error: e};
        }
    }

    getUrl():string{
        return  `https://login.microsoftonline.com/${process.env.TENANT}/oauth2/v2.0/authorize?` +
                `client_id=${process.env.CLIENT_ID}` +
                `&response_type=${process.env.RESPONSE_TYPE}` + 
                `&redirect_uri=${process.env.REDIRECT_URI}` + 
                `&response_mode=${process.env.FORM_POST}` +
                `&scope=${process.env.SCOPE}` + 
                `&state=${process.env.STATE}` +
                `&nonce=${process.env.NONCE}`;
    }
}
