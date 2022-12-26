// import axios from 'axios';

// let headerConfig = {
//     // headers :{Authorization : `Bearer ${localStorage.getItem("token")}`}
//     // headers: { Authorization: "Bearer " + localStorage.getItem("token")}
// }

import axios from "axios";

const headerConfig = {
    headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}
}

export const signInAPI = (logInstate) => {
    let response = axios.post("https://localhost:44385/api/User/Login", logInstate)
    console.log('SignIn API Executed')
    return response;
}

export const signUpAPI = (signUpstate) => {
    let response = axios.post("https://localhost:44385/api/User/Register", signUpstate)
    console.log('SignUp API Executed')
    return response;
}

export const forgetPasswordAPI = (emailId) => {
    let response = axios.post(`https://localhost:44385/api/User/ForgetPassword?emailId=${emailId}`, null)
    console.log('ForgetPassowrd API Executed')
    return response;
}

export const resetPasswordAPI = (resetState) => {
    let response = axios.put(`https://localhost:44385/api/User/ResetPassword?newPassword=${resetState.newPassword}&confirmPassword=${resetState.confirmPassword}`, null, headerConfig)
    console.log('ResetPassword API executed')
    return response;
}
