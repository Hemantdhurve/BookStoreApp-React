import axios from 'axios';

export const signInAPI=(logInstate)=>{
    let response=axios.post("https://localhost:44385/api/User/Login",logInstate)
    return response;
}

export const signUpAPI=(signUpstate)=>{
    let response=axios.post("https://localhost:44385/api/User/Register",signUpstate)
    return response;
}