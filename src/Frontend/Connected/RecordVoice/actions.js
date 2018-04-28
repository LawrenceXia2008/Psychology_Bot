import {
	__getClip,
	__send
} from "actionTypes";


export const getClip = ({ blob , url , id }) => ({
	type: __getClip,
	payload: {
		blob,
		url
	},
	id
});

export const send = ({ response , said }) => ({
	type: __send,
	payload: {
		response,
		said
	}
})