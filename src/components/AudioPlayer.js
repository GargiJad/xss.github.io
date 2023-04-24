 import React,{useEffect } from 'react';
// import myAudioFile1 from '../components/assests/musics/Digital Technology.mp3';

// function AudioPlayer() {
//   return (
//     <div>
//       <audio src={myAudioFile1} autoPlay loop muted />
//     </div>
//   );
// }

// export default AudioPlayer;

// import React, { useEffect } from 'react';

// const AudioPlayer = ({ src }) => {
//   useEffect(() => {
//     const audio = new Audio(src);
//     audio.play();

//     return () => {
//       audio.pause();
//       audio.currentTime = 0;
//     };
//   }, [src]);

//   return null;
// };

// export default AudioPlayer;



// const AudioPlayer = ({ src }) => {
//   useEffect(() => {
//     const audio = new Audio(src);
//     audio.play();
//   }, [src]);

//   return null;
// };

// export default AudioPlayer;
// import React, { useEffect } from 'react';

// const AudioPlayer = ({ audioSrc, videoSrc }) => {
//   useEffect(() => {
//     const audio = new Audio(audioSrc);
//     const video = document.getElementById('video');
//     video.autoplay = true;
//     video.load();
//     audio.play();

//     return () => {
//       audio.pause();
//       audio.currentTime = 0;
//       video.pause();
//       video.currentTime = 0;
//     };
//   }, [audioSrc, videoSrc]);

//   return (
//     <div>
//       <video id="video" src={videoSrc} />
//     </div>
//   );
// };

// export default AudioPlayer;