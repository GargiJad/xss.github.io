import { useRef, useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Container, CssBaseline, Grid, Box, CardMedia } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../components/css/home.css'
import Intro from '../components/assests/videos/Intro.mp4'
import welcome from '../components/assests/videos/Welcome.mp4'
import bg from '../components/assests/videos/Bg.mp4'
import VideoBg from "../components/VideoBg";
import myAudioFile from '../components/assests/musics/Digital Technology.mp3';
import imgStart from '../components/assests/images/Start.png';
// import AudioPlayer from "../components/AudioPlayer";
// import { AudioPlayer } from '@material-ui/core';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
const theme = createTheme();

function Home() {
    const audio = new Audio(myAudioFile);

    const [isVideoVisible1, setIsVideoVisible1] = useState(true);
    const [isVideoVisible2, setIsVideoVisible2] = useState(false);
    const [isVideoVisible3, setIsVideoVisible3] = useState(false);

    const handleClick = () => {
        audio.loop = true;
        audio.play();
        audio.volume = 0.1;
        setIsVideoVisible1(false);
        setIsVideoVisible2(true);

        const timeoutId = setTimeout(() => {
            handleClick2()
        }, 6000);

        return () => clearTimeout(timeoutId);
    };
    const handleClick2 = () => {

        setIsVideoVisible2(false);
        setIsVideoVisible3(true);
    };
    return (
        <>
{/* 
            <CardMedia
                component="audio"
                src={myAudioFile1}
                autoPlay
                loop
                className='w-100 h-100'
            /> */}
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <main>
                    {isVideoVisible1 && (
                        <>
                            <video autoPlay muted loop id="bg-video"  >
                                <source src={welcome} type="video/mp4" />
                            </video>


                        </>
                    )}
                    {isVideoVisible2 && (
                        <>
                            <video autoPlay muted loop id="bg-video">
                                <source src={Intro} type="video/mp4" />
                            </video>
                        </>
                    )}
                    {isVideoVisible3 && (
                        <>
                            <video autoPlay muted loop id="bg-video">
                                <source src={bg} type="video/mp4" />
                            </video>
                            <VideoBg />
                        </>
                    )}

                    {!isVideoVisible2 && !isVideoVisible3 && <Button variant="contained" color="primary" id="btn" onClick={handleClick}>
                        <img src={imgStart} className="w-100 h-100 "></img>
                    </Button>}

                </main>
            </ThemeProvider>
        </>

    );
}

export default Home;
