import {
	__getClip
} from "actionTypes";

export default ( state = {
	blobs: [],
	urls: []
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
		default:
			return state;
	}
}