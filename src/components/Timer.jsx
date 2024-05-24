import React, { useState, useEffect } from 'react';

function Timer() {

  let timer;
  const initialTime = 25 * 60;
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  // When the timer starts
  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    clearInterval(timer);
    setTime(initialTime);
    setIsRunning(false);
  }

  useEffect(() => {

    if (isRunning) {
       timer = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 0) {
            clearInterval(timer);
            setIsRunning(false);
            return 0;
          } 
          else {
            return prevTime - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);

  }, [isRunning]);

  return (
    <div className='select-none'>
      <div className='flex items-center flex-col'>
        <h1 className='font-bold text-[5rem] text-font-color'>
          {Math.floor(time / 60).toString().padStart(2, '0')}:{(time % 60).toString().padStart(2, '0')}
        </h1>
        {
            isRunning
            ? 
            <button 
            className='text-font-color border-secondary-color border border-solid w-[80%] text-center py-3 rounded-md
                            hover:opacity-70'
            onClick={resetTimer}
            >
                Reset
            </button>
            :
            <button 
            className='text-font-color border-secondary-color border border-solid w-[80%] text-center py-3 rounded-md
                            hover:opacity-70'
            onClick={startTimer}
            disabled={isRunning}
            >
                Start
            </button>
        }
      </div>
    </div>
  );
}

export default Timer;
