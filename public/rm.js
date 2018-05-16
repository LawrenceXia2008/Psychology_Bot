var exec = require('child_process').exec; 
 function filterStr(str)  
{  
        var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]");  
        var specialStr = "";  
        for (var i=0;i<str.length;i++)  
        {  
             specialStr += str.substr(i, 1).replace(pattern, '');   
        }  
        return specialStr;  
}  


function rm(hash)
{
	hash = filterStr(hash);
	var cmdStr = 'rm -f result'+hash+'.mp3' ;
	exec(cmdStr, function(err,stderr){
    		if(err) {
       			 console.log(stderr);
    			}
	})
};

module.exports = rm;
