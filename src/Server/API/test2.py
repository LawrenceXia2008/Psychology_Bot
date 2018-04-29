#-*- coding: utf-8 -*-
import requests
import time
import hashlib
import base64
import struct
import json

URL = "http://api.xfyun.cn/v1/service/v1/tts"
AUE = "lame"
APPID = "5ab67bf9"
API_KEY = "961b161a620354c6c96c86ea83afa40f"

def getHeader():
        curTime = str(int(time.time()))
        param = {
        "auf": "audio/L16;rate=16000",
        "aue": "raw",
        "voice_name": "xiaoyan",
        "speed": "50",
        "volume": "50",
        "pitch": "50",
        "engine_type": "aisound",
        "text_type": "text"
        }
        paramBase64 = base64.b64encode(json.dumps(param).replace(' ', ''))
        m2 = hashlib.md5()
        m2.update(API_KEY + curTime + paramBase64)
        checkSum = m2.hexdigest()
        header ={
                'X-CurTime':curTime,
                'X-Param':paramBase64,
                'X-Appid':APPID,
                'X-CheckSum':checkSum,
                'X-Real-Ip':'127.0.0.1',
                'Content-Type':'application/x-www-form-urlencoded; charset=utf-8',
        }
        return header

def getBody(text):
        data = {'text':text}
        return data

def writeFile(file, content):
    with open(file, 'w+') as f:
        f.write(content)
    f.close()

r = requests.post(URL,headers=getHeader(),data=getBody("科大讯飞是中国最大的智能语音技术提供商"))
contentType = r.headers['Content-Type']
if contentType == "audio/mpeg":
    sid = r.headers['sid']
    if AUE == "raw":
        writeFile(sid+".wav", r.content)
    else :
        writeFile(sid+".mp3", r.content)
    print "success, sid = " + sid
else :
    print r.text 
