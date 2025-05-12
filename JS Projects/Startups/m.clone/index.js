

navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: true,
      sampleRate: 44100
    },
    video: true
  })
  .then(function(stream) {
    const video = document.querySelector('video');
    video.srcObject = stream;
    video.play();
  })
  .catch(function(err) {
    console.error('Error accessing media devices:', err);
  });
  