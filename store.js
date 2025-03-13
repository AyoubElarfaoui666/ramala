import {createStore} from "redux" ;

const initialState = {
    userName : "" ,
    userPass : "" ,
    conventions:[] ,
}

function reducer(state = initialState , action){
    switch(action.type){
        case "Authentification" :
            return {...state,userName:action.payload.userName,userPass:action.payload.userPass} ;
            break ;
        case "addConvention" :
            return {...state,conventions:[...state.conventions,action.payload]} ;
            break ;
        default :
            return state
    }
}

export const store = createStore(reducer) ;

