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

   /*这里开始时UrlEncode和UrlDecode函数*/
   function str2asc(strstr){
	return ("0"+strstr.charCodeAt(0).toString(16)).slice(-2);
	}
	function asc2str(ascasc){
	return String.fromCharCode(ascasc);
	}
function UrlEncode(str){
  var ret="";
  var strSpecial="!\"#$%&'()*+,/:;<=>?[]^`{|}~%";
  var tt= "";

  for(var i=0;i<str.length;i++){
   var chr = str.charAt(i);
    var c=str2asc(chr);
    tt += chr+":"+c+"n";
    if(parseInt("0x"+c) > 0x7f){
      ret+="%"+c.slice(0,2)+"%"+c.slice(-2);
    }else{
      if(chr==" ")
        ret+="+";
      else if(strSpecial.indexOf(chr)!=-1)
        ret+="%"+c.toString(16);
      else
        ret+=chr;
    }
  }
  return ret;
}
function UrlDecode(str){
  var ret="";
  for(var i=0;i<str.length;i++){
   var chr = str.charAt(i);
    if(chr == "+"){
      ret+=" ";
    }else if(chr=="%"){
     var asc = str.substring(i+1,i+3);
     if(parseInt("0x"+asc)>0x7f){
      ret+=asc2str(parseInt("0x"+asc+str.substring(i+4,i+6)));
      i+=5;
     }else{
      ret+=asc2str(parseInt("0x"+asc));
      i+=2;
     }
    }else{
      ret+= chr;
    }
  }
  return ret;
}

//========================================================
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


	//const XParam = btoa( JSON.stringify(ParamJson) );
	const XParam ="eyJhdWUiOiJyYXciLCJlbmdpbmVfdHlwZSI6InNtczE2ayJ9";
	const XCheckSum = md5( apiKey + currentTime + XParam );

  reader.readAsDataURL( audio );

  reader.onloadend = () => {
    const base64 = reader.result;
    var result = base64.slice( base64.indexOf(',') + 1 , base64.length );
    result = UrlEncode( result );
    result.replace('f','F');
    console.log( result );
	   fetch( "/api/AudioToText" , {
	    method: "POST",
	      headers: {
         "Content-Type": "x-www-form-urlencoded; charset=utf-8",
	  	   "X-Appid": apiId,
	  	   "X-CurTime": currentTime,
	  	   "X-Param": XParam,
	  	   "X-CheckSum": XCheckSum
	     },
	     body: `audio=${result}`
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
  }
}
