import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import * as fp from "fingerpose";
import { drawHand } from './utilities';
import {SuperrGesture, ClosedGesture, RockGesture, HelloGesture} from "./gestures";
import victory from "./assets/victory.png";
import thumbs_up from "./assets/thumbs_up.png";
import closed from './assets/closed.png';
import hello from './assets/hello.png';
import superr from './assets/superr.png';
import rock from './assets/rock.png';

function App() {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [emoji, setEmoji] = useState(null);
  const images = { 
    thumbs_up: thumbs_up, 
    victory: victory, 
    superr: superr,
    closed: closed, 
    rock: rock,
    hello: hello,
  };

  const runHandPose = async () => {
    const net = await handpose.load();
    // Loop and detect hands
    setInterval(() => {
      detect(net)
    }, 10)

    setInterval(() => {
      window.location.reload();
    }, 40000)
  }

  const detect = async (net) => {
    if (typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const hand = await net.estimateHands(video);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          fp.Gestures.ThumbsUpGesture,
          SuperrGesture,
          ClosedGesture,
          RockGesture,
          // fp.Gestures.VictoryGesture,
          // HelloGesture
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {

          const confidence = gesture.gestures.map(
            (prediction) => prediction.score
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          setEmoji(gesture.gestures[maxConfidence].name);
          console.log(gesture.gestures)
        }
      }

      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  }

  runHandPose();
  return (
    <div className="App">
      <header className="App-header">
        <Webcam ref={webcamRef}
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            top: 0,
            textAlign: 'center',
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas ref={canvasRef}
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            zIndex: 9,
            width: 640,
            height: 480
          }}
        />

        <div style={{
          position: 'absolute',
          marginLeft: 'auto',
          marginRight: 'auto',
          bottom: 20,
          left: 0,
          right: 0,
          textAlign: 'center',
          zIndex: 12,
          width: 900,
          height: 200 
        }}><h3>
          Symbols to detect: Thumbs Up 👍, Ok 👌, Rock 🤘
        </h3></div>

        {emoji !== null ? <img src={images[emoji]} style={{
          position: 'absolute',
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 400,
          bottom: 400,
          right: 0,
          zIndex: 12,
          textAlign: 'center',
          height: 100
        }} /> : ""}
      </header>
    </div>
  );
}

export default App;