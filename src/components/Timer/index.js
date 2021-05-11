import React from 'react';
import { useSelector } from 'react-redux';

export default function Timer() {
  const timer = useSelector(state => state.timer);

  const formatTime = time => {
    time /= 1000;
    // formats into mm:ss
    return `${Math.floor(time / 60)} : ${time % 60}`;
  }

  return (
    <>
      <h1 className="timer">
        {formatTime(timer)}
      </h1>
    </>
  );
}