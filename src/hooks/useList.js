import { useReducer } from "react";
import { act } from "react-dom/test-utils";

const initialState = {list: []}

function listReducer(state, action){

    switch(action.type){
        case 'getInfos':
            return {list: action.payload}
            break;

        case 'reset':
            return{list: initialState.list}
        default: 
            return state
    }
}

export function useList(){
    return useReducer(listReducer, initialState)
}