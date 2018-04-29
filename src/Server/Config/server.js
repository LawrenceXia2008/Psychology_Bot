const path = require("path")

module.exports = {
    https: true,
    port: 443,
    caFile: path.join( __dirname , "../SSL/ca-bundle.pem" ),
    keyFile: path.join( __dirname , "../SSL/psyxwi.key" ),
    certFile: path.join( __dirname , "../SSL/cert.pem" ),
    session: {
      secret: "Antinux",
      resave: true,
      saveUninitialized: true
    }
};
