var client = require("./directLine v3");

var secret = "bZPwTlAikCE.cwA.lys.IJ-vrs_z9tl-p2Vl4ibhMrinPjrlc7um6qNowm2dWRA";
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
        flag = 1;
        //create Conversation
        client.initConversationStream( _tokenObject ).subscribe(
          message => {
            _conversationWss = message;

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

async function perpare(){
  await getTokenAndGetConverstation().catch( $ => perpare() );
};

perpare();

setInterval( () => {
  _tokenObject = 0;
  _conversationWss;
  _watermark = 0;
  flag = 0;
  perpare();
}, 26 * 60 * 1000 );//重置

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
          res.send( result );
        }
      )
   },
   err => console.log( err )
  )
}
