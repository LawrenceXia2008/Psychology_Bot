import {
	__getClip,
	__send,
  __selectVoice__
} from "actionTypes";

export const selectVoice = key => ({
  type: __selectVoice__,
  payload: {
    key
  }
})

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
