
interface IMicrosoftPostRequestBody{
    client_id: string;
    client_secret: string;
    scope: string;
    code: string;
    redirect_uri: string;
    grant_type: string;
}

export class MicrosoftPostRequestBody extends ReadableStream implements IMicrosoftPostRequestBody{

    client_id: string;
    client_secret: string;
    scope: string;
    redirect_uri: string;
    grant_type: string;
    code: string;

    constructor(codeNew: string){

        super(); 

        this.client_id = process.env.CLIENT_ID;
        this.client_secret = process.env.CLIENT_SECRET;
        this.scope = process.env.SCOPE;
        this.redirect_uri = process.env.REDIRECT_URI;
        this.grant_type = process.env.GRANT_TYPE;
        this.code = codeNew;
    }
    
    
}