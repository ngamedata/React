import { API } from "./type";

const intial={
    apidata:[],
}

export const reducerPrime=(state=intial,action)=>{
    switch(action.type){
        case API:
            return{...state,apidata:action.payload}
        default:
            return{...state}
    }
}