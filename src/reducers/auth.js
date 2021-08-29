import {SAVE_CARD_SUCCESS, STATUS_UPDATE} from '../actions.js';

const initialState = {
    pid: null,
    status: 'wait',
}


export default function auth(state = initialState, action){
	switch(action.type) {
        
        case SAVE_CARD_SUCCESS: {
          return {
            ...state, 
            pid: action.payload,
          }
        }
        case STATUS_UPDATE: {
          return {
            ...state,
            status:  action.payload,
          }
        }

        default: 
        return state;
  } 
}