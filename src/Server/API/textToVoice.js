var execSync = require('child_process').execSync;

module.exports = ( req, res ) => {
  const { text } = req.body;
  stdout = execSync( `php textToVoice.php ${text}` );
  res.send( stdout );
}
