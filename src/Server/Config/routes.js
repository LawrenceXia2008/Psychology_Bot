const requireAPI = ( api ) => require("../API/" + api );

module.exports = {
  "/textToVoice": {
    api: requireAPI("textToVoice")
  },
	"/AudioToText": {
		api: requireAPI("ConvertAudioToText")
	},
  "/getAnswer": {
    api: requireAPI("getAnswer")
  },
  "/log": {
    api: requireAPI("logger")
  }
};
