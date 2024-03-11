
import {  useCookies } from 'react-cookie'

class Authentication{
    static isAuthenticated=()=>{
      const [cookies,setCookies]=useCookies(["access_token"]);

    return !!cookies.access_token;
  }
}

export default Authentication