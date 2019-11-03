
import { RECEIVE_HEROES } from "./heroAction";


function receiveHeroes(heroes) {
	return {
		type: RECEIVE_HEROES,
		payload: { heroes }
	}
}

export function fetchHeroes() {
    return dispatch => {
      return fetch(`https://hahow-recruit.herokuapp.com/heroes`)
        .then(response => response.json())
        .then((heroes) => dispatch(receiveHeroes(heroes)));
    }
}

export default function heroReducer(state = { heroList:[], profile:[] }, action) {
	switch (action.type) {
		case RECEIVE_HEROES:
            return { 
                ...state, 
                heroList: action.payload.heroes };
		default:
			return state;
	}
}

  