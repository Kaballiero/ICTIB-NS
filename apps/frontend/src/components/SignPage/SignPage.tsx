import { JSXElementConstructor, ReactElement, useCallback, useEffect, useState } from 'react';
import AuthButton from '../Buttton/AuthButton';
import style from './signPage.module.scss'
import axios from 'axios';

export function SignPage({...args}) : ReactElement<any, string | JSXElementConstructor<any>>  {

    const [link, setLink] = useState('/');

    const loadLink = useCallback(async () => {
        const newLink = 'https://login.microsoftonline.com/sfedu.ru/oauth2/v2.0/authorize?client_id=88833a11-592a-477e-a63c-5354a8a646e7&response_type=code&redirect_uri=http://localhost:5001/auth/callback/microsoft&response_mode=form_post&scope=openid&state=12345&nonce=678910';//await axios.get('https://0.0.0.0:5000/home/authUrl');
        alert(newLink);
        if(newLink){
            setLink(newLink);
        }
    }, []);

    useEffect(() =>{
        loadLink();
    }, [loadLink]);

    return (
        <main>

            <div className={style.__signBox}>
                <div className={style.__titleBox}>
                    <p>ВХОД</p>
                </div>

                <AuthButton styleButton={style.__buttonBox} authMicrosoftLink={link}></AuthButton>

            </div>

        </main>
    );
}

export default SignPage;