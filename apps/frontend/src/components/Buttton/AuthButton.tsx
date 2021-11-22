import './authButton.module.scss'
import Button from '@mui/material/Button';

export function AuthButton({...args}) {

    return (
        <Button variant="contained" className={args.styleButton} href={args.authMicrosoftLink}>Войти</Button>
    );
}

export default AuthButton;