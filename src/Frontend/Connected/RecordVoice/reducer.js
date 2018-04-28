import {
	__getClip,
	__send
} from "actionTypes";

export default ( state = {
	blobs: [],
	urls: [],
	said: "",
	response: ""
} , { type , payload , id } ) => {
	const { blobs , urls } = state;
	switch( type ){
		case __getClip: {
			let newBlobs = [...blobs];
			let newUrls = [...urls];
			newBlobs.push( payload.blob );
			newUrls.push( payload.url );
			return {
				blobs: newBlobs,
				urls: newUrls
			};
		}
		case __send: {
			const { said , response } = payload;
			if( said ){
				return {
					...state,
					said
				}
			} else {
				return {
					...state,
					response
				}
			}
		}
		default:
			return state;
	}
}