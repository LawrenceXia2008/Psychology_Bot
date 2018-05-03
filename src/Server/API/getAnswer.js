var client = require("./directLine v3");

var secret = "tH1doegR4Cg.cwA.0_I.i7ze5cFjB-YtUc_R1hl8SwbJbj250G9CaMuEYH8Y8uU";
var _tokenObject = 0;
var _conversationWss;
var _watermark = 0;
var flag = 0;

var messageBody = {
  type: "message",
  from: {
    id: "user1"
  },
  text: "你好"
};

function getTokenAndGetConverstation(){
  return new Promise( ( reslove , reject ) => {
    client.getTokenObject( secret ).subscribe(
      tokenObject => {
        _tokenObject = tokenObject;
        console.log( "现在tokenObject为" + _tokenObject );
        flag = 1;
        //create Conversation
        client.initConversationStream( _tokenObject ).subscribe(
          message => {
            _conversationWss = message;
            console.log(_conversationWss);
            reslove();
          },
          err => {
            console.log( err );
            reject( "init CS Failed" + err.toString() );
          }
        )
      },
      err => {
        console.log( err );
        reject( "get Token Failed" + err.toString() );
      }
    )
  })
}

async function perpare() {
  await getTokenAndGetConverstation().catch(
    () => {
    perpare();
  })
};

perpare();

setInterval( () => perpare(), 30000 );

module.exports = ({ res , req }) => {
  console.log( req.body.text );
  client.sendMessage( _tokenObject , {
    type: "message",
    from: {
      id: "user1"
    },
    text: req.body.text
  } ).subscribe(
    data => {
      var id = data.id;
      client.getMessage( _tokenObject , _watermark ).subscribe(
        result => {
          _watermark = result.watermark;
          console.log( result );
          res.send( result );
        }
      )
   },
   err => console.log( err )
  )
}
