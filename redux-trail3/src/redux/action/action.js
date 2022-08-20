import { SET_NAME } from "../types/type";

export const setName=(data)=>{
    return{
    type:SET_NAME,
    payload:data
    }  
}
