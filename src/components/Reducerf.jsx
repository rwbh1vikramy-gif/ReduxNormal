import { FETCHFAILED, FETCHLOADING, FETCHSUCCESS } from "./ActionTypes";
import { initialstate } from "./Advancedstatemanagement";


export function reducer (state=initialstate, action){

switch (action.type){
case FETCHLOADING:
    return { ...state, loading:true  }
case FETCHSUCCESS:
    return  { ...state,  data:action.payload, loading:false}

case FETCHFAILED :
    return {...state,loading:false, error:action.payload }    
default:
    return state
}
}