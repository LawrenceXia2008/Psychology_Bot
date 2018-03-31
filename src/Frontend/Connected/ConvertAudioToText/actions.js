import {
	__sendConvert
} from "actionType";

import md5 from "js-md5";

import bufferToWav from "audiobuffer-to-wav";

const audioCtx = new AudioContext();

const reader = new FileReader();


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

	const apiId = '5ab67bf9';
	const apiKey = "b60768780fde86f7b55c8bdbffc2a53b";
	const currentTime = Math.floor( Date.now() / 1000 );
	const ParamJson = {
		"engine_type":"sms16k",
		 "aue": "raw"
	};


	const XParam = btoa( JSON.stringify(ParamJson) );
	const XCheckSum = md5( apiKey + currentTime + XParam );

  reader.readAsArrayBuffer( audio );

  reader.onloadend = () => {
    const arrayBuffer = reader.result;
    audioCtx.decodeAudioData( arrayBuffer  , buffer => {
      let wav = bufferToWav( buffer );
      let blob = new Blob( [new DataView( wav )] , {
        type: "audio/wav"
      });
	    fetch( "/api/AudioToText" , {
	  	  method: "POST",
	       headers: {
           "Content-Type": "x-www-form-urlencoded; charset=utf-8",
	  		   "X-Appid": apiId,
	  		   "X-CurTime": currentTime,
	  		   "X-Param": XParam,
	  		   "X-CheckSum": XCheckSum
	  	   },
	  	   body: `audio=${btoa( blob )}`
	     }).then( response => {
	  	   if( !response.ok ){
	  		   throw "network"
	  	   } else {
	  		   response.json()
           .then( json => {
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
    })
  }
}
