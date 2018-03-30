import {
	__getClip
} from "actionTypes";


export const getClip = ({ blob , url , id }) => ({
	type: __getClip,
	payload: {
		blob,
		url
	},
	id
});
