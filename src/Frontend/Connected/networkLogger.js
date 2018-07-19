const networkLogger = {
  log( message ){
    fetch("/log", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    })
  }
};

function logAllErrToServer( code ){
  try {
    code();
  } catch( err ){
    networkLogger.log( err );
  }
}

module.exports = {
  networkLogger,
  logAllErrToServer
}
