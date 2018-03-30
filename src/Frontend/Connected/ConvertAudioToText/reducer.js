import {
	__sendConvert
} from "actionType";

export default ( state = {
	texts: []
} , { type , payload , id } ) => {
	switch( type ){
		case __sendConvert.pending:{
			return state;
		}
		case __sendConvert.resolved:{
			let texts = [...state.texts];
			texts.push( payload.text );
			return {
				texts
			}
		}
		default:
			return state;
	}
};