import axios from "axios";

const headerConfig = {
    // headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}
    headers: { Authorization: "Bearer " + localStorage.getItem("token")}
}


export const getAllBooks=()=>{
    let response=axios.get('https://localhost:44385/api/Book/RetriveAll',headerConfig)
    return response;
}

export const getBooksById=(bookId)=>{
    let response=axios.get(`https://localhost:44385/api/Book/RetriveById?bookId=${bookId}`,headerConfig)
    return response;
}