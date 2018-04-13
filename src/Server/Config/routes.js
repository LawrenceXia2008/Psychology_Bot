const requireAPI = ( api ) => require("../API/" + api );

module.exports = {
	"/AudioToText": {
		api: requireAPI("ConvertAudioToText")
	},
  "/getAnswer": {
    api: requireAPI("getAnswer")
  }
};
