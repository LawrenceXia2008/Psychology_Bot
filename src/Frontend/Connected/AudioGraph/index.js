const audioCtx = new AudioContext()

navigator.mediaDevices.getUserMedia({
  audio: true
}).then( stream => {
  AudioContext.createMediaStreamSource( stream )
})
