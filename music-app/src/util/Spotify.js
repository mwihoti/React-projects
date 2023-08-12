const slientId = '';
const redirectUri = 'http://localhost:3000';
let accessToken;

const Spotify={
    getAccessToken(){
        if(accessToken){
            return accessToken;
        }
        const accessTokenMatch= window.location.href.match(/access_token([^&]*)/);
        const expiresInMatch=window.location.href.match(/expires_in=([^&]*)/);
        if(accessTokenMatch && expiresInMatch){
            accessToken=accessTokenMatch[1];
            const expiresIn=Number(expiresInMatch[1]);
            window.setTimeout(() => (accessToken=''), expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;

        }else{
            const accessUri=''
             }
    }
}