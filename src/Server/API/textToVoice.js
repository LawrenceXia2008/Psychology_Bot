var execSync = require('child_process').execSync;

module.exports = ( req, res ) => {
  const { text } = req.body;
  console.log( "准备转换:" + text );
  stdout = execSync( `php textToVoice.php ${text}` );
  console.log( stdout );
  res.send( stdout );
}
