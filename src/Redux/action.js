import { ADD_SUCCESS,ADD_REQUEST,ADD_FAILURE } from "./actionTypes";


const addRequest = ()=>{
    return {
        type : ADD_REQUEST
    };
};
const addSuccess = (payload)=>{
    return {
        type : ADD_SUCCESS,
        payload
    };
};

const addFailure = ()=>{
    return {
        type : ADD_FAILURE
    };
};

export {addRequest,addSuccess,addFailure};