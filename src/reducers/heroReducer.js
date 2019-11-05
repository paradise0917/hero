
import { RECEIVE_HEROES, SELECT_HERO, RECEIVE_PROFILE, SET_PROFILE } from "./heroAction";


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

export function selectHero(id){
	return {
		type: SELECT_HERO,
		payload: id
	};
}

function receiveProfile(profile){
	return {
		type: RECEIVE_PROFILE,
		payload: { profile }
	}
}

export function fetchProfile(id){
	return dispatch => {
		return fetch(`http://hahow-recruit.herokuapp.com/heroes/${id}/profile`)
		  .then(response => response.json())
		  .then((profile) => dispatch(receiveProfile(profile)));
	  }
}

export function setProfile(heroId, profile) {
	return {
		type: SET_PROFILE,
		payload: { heroId, profile }
	}
}

export function patchHeroProfile(heroId, profile) {

	return () => {
		return fetch(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`, {
			method: "PATCH",
			body: JSON.stringify(profile),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(response => response.status);
	}
}

export default function heroReducer(state = { heroList:[], selectedHero: -1, profile:[] }, action) {
	switch (action.type) {
		case RECEIVE_HEROES:
            return { 
                ...state, 
				heroList: action.payload.heroes 
			};
		case SELECT_HERO:
			return{
				...state, 
				selectedHero: action.payload
			};
		case RECEIVE_PROFILE:
			return{
				...state, 
				profile: action.payload.profile
			};
		case SET_PROFILE:
			return { ...state, 
				profile: { ...state.profile, 
				[action.payload.heroId]: action.payload.profile } 
			};
		default:
			return state;
	}
}

  