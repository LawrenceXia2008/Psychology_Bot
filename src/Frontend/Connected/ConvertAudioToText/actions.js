import {
	__sendConvert
} from "actionType";
import md5 from "js-md5";

export const sendConvertStart = () => ({
	type: __sendConvert.pending
})

export const recieveText = ({ text }) => ({
	type: __sendConvert.resolved,
	payload: {
		text
	}
})

export const sendConvertFailed = ({ reason }) => ({
	type: __sendConvert.rejected,
	payload: {
		reason
	}
})

export const sendConvert = ({ audio }) => dispatch => {

	if( !audio ){
		return;
	}
	dispatch( sendConvertStart() );

	const reader = new FileReader();
	reader.readAsDataURL( audio );
	reader.onloadend = () => {
		const apiId = '5ab67bf9';
		const apiKey = "b60768780fde86f7b55c8bdbffc2a53b";
		const currentTime = Date.now();
		const ParamJson = {
			"engine_type":"sms16k",
			 "aue": "raw"
		};
 
 
		const XParam = btoa( JSON.stringify(ParamJson) );
		const XCheckSum = md5( apiKey + currentTime + XParam );
 
		console.log( audio , reader.result.slice( reader.result.indexOf(',') + 1, reader.result.length ) );
 
		fetch( "/api/AudioToText" , {
			method: "POST",
			headers: {
				"Content-Type": "x-www-form-urlencoded; charset=utf-8",
				"X-Appid": apiId,
				"X-CurTime": currentTime,
				"X-Param": XParam,
				"X-CheckSum": XCheckSum
			},
			body: `audio=${reader.result.slice( reader.result.indexOf(',') + 1, reader.result.length )}`
		}).then( response => {
			if( !response.ok ){
				throw "network"
			} else {
				response.json().then( json => {
					console.log( json );
					if( json.code !== "0" ){
						dispatch( sendConvertFailed({ reason: "server" }) );
					} else {
						dispatch( recieveText({ text: json.data }) );
					}
				});
			}
		}).catch( err => {
			dispatch( sendConvertFailed({ reason: err }) );
		})
	}
}