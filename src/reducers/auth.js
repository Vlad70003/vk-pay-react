import {SAVE_CARD_SUCCESS} from '../actions.js';

const initialState = {
    saveCard: false,

}


export default function auth(state = initialState, action){
	switch(action.type) {
        
        case SAVE_CARD_SUCCESS: {
          return {
            ...state, 
            saveCard: true,
          }
        }

        default: 
        return state;
  } 
}