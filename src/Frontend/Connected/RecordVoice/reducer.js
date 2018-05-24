import {
	__getClip,
	__send,
  __selectVoice__
} from "actionTypes";

export default ( state = {
	blobs: [],
	urls: [],
	said: "",
	response: "",
  voice: 4
} , { type , payload , id } ) => {
	const { blobs , urls } = state;
	switch( type ){
    case __selectVoice__: {
      return {
        ...state,
        voice: payload.key
      }
      break;
    };
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
