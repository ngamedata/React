import { Actiontypes } from "../ActionTypes/actionTypes"

const intialstate={
    products:[
        {
            name:"hello"
        }
    ]
}

export const productReducer=(state=intialstate,{type,payload})=>{
    switch(type){
        case Actiontypes.SET_PRODUCTS:
            return state
        default:
            return state

    }
}