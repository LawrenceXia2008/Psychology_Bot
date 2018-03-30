const fetch = require("node-fetch");


module.exports = ({ res , req }) => {
	
	
	fetch( "http://api.xfyun.cn/v1/service/v1/iat" , {
		method: "POST",
		headers: {
			"Content-Type":req.get("Content-Type"),
			"X-Appid":req.get("X-Appid"),
			"X-CurTime":req.get("X-CurTime"),
			"X-Param":req.get("X-Param"),
			"X-CheckSum":req.get("X-CheckSum")
		},
		body: req.body
	}).then( response => {
		response.json().then( json => {
			res.send( json );
		})
	})
}