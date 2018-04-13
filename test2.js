var secret = 'N6adpOcVysE.cwA.vU4.ytwd9-PFeKVBnLjUGMGfZIkltlBjKv-BbCDlwUOVZMw';
var _tokenObject=0;
var _conversationWss;
var _watermark = 0;
var flag=0;

var client=require("./directLine v3");
var messageBody = {
    "type": "message",
    "from": {
      "id": 'user1'
      
    },
    "text": "你好"
  };
function getTokenAndGetConverstation() {
  client.getTokenObject(secret).subscribe(
    (tokenObject) => {
      
      _tokenObject=tokenObject;
      console.log("现在tokenObject为"+_tokenObject);
      flag=1;
      //create Conversation
      client.initConversationStream(_tokenObject).subscribe(
        (message) => {
          _conversationWss = message;
         console.log(_conversationWss);
         client.sendMessage(_tokenObject,messageBody).subscribe(
          (data)=>{
            var id=data.id;
            client.getMessage(_tokenObject,_watermark).subscribe(
              (result)=>{
                _watermark=result.watermark;
                console.log(result);
              }
              )
            },
          (err)=>console.log(err),
          ()=>console.log("send complete")
          )
         
          // var ws = new WebSocket(_conversationWss.streamUrl);
          // ws.on('message', function (retsult, flags) {
          //   logger.log('info', retsult);

          //   // if (JSON.parse(retsult).activities[0].from.id !== message.FromUserName) {
          //   //   res.reply(JSON.parse(retsult).activities[0].text);
          //   // }
          // });
          // ws.on('close', function close() {
          //   //observer.complete();
          //   console.log("get Message complete");
          // });


          //refresh token,every 15 min refreshToken
          	},
        (err) => console.log(err),
        () => {
          console.log("1.2:get conversation successfully");
        }
      )
    },
    (err) => console.log(err),
    () => console.log('1.1:get token successfully')
  )
}
getTokenAndGetConverstation();






