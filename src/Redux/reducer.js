import { ADD_FAILURE,ADD_SUCCESS,ADD_REQUEST } from "./actionTypes";
const initState = {
    employ_Details : [],
    isLoading : false,
    isError : false
}

const reducer = (state=initState, {type , payload})=>{
switch (type){
    case ADD_REQUEST : {
        return {
            ...state,
            isLoading : true
        };
    }
    case ADD_SUCCESS : {
        return{
            ...state,
            employ_Details : [...state.employ_Details,payload],
            isLoading : false
        };
    }
    case ADD_FAILURE : {
        return {
            ...state,
            isError : true
        };
    }
    default :
        return state
  
}
}
export {reducer};