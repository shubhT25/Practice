import React, {useState, useEffect} from 'react'

const ClickBait = () => {
    const [clicks, setClicks] = useState(0);
    const [timer, setTimer] = useState(10);
    const [counterInterval, setCounterInterval] = useState();
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        if(timer === 0) {
            console.log(timer);
            setFlag(false);
            setTimer(10);
            clearInterval(counterInterval)
        }
    },[counterInterval, timer])

    const startTimer = () => {
        setClicks(0);
        setFlag(true);
        setCounterInterval( setInterval(() => {
            setTimer(timer => timer - 1);
        }, 1000))
    }

  return (
    <div>
      <h3>No.of Click until timer expires</h3>
      <div className='innerClick'>
        <h4>{clicks} Clicks</h4>
            {flag ? (
                <>
                    <h4>Time Left: {timer}</h4>
                    <button onClick={() => setClicks(clicks => clicks + 1)}>+</button>
                </>
                ) : 
                (   
                    <>
                        <button onClick={startTimer}>Start Timer</button>
                    </>
                )
            }
        
      </div>
    </div>
  )
}

export default ClickBait
