const path = require("path");
var execSync = require('child_process').execSync;

const phpFile = path.resolve( __dirname, "./textToVoice.php" );

module.exports = ({ req, res }) => {
  const { text } = req.body;
  console.log( "准备转换:" + text );
  stdout = execSync( `php ${phpFile} ${text}` );
  console.log( stdout.toString() );
  res.send( {
    url: stdout.toString()
  });
}
