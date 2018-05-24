const path = require("path");
var execSync = require('child_process').execSync;

const phpFile = path.resolve( __dirname, "./textToVoice.php" );

module.exports = ({ req, res }) => {
  const { text, voice } = req.body;
  stdout = execSync( `php ${phpFile} ${text} ${voice}` );
  res.send( {
    url: stdout.toString()
  });
}
