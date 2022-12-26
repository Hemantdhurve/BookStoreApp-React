import axios from "axios";

const headerConfig = {
    headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}
}


export const getAllBooks=()=>{
    let response=axios.get('https://localhost:44385/api/Book/RetriveAll',headerConfig)
    return response;
}