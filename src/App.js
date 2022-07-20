import React, { useState } from 'react';

const App = () => {
  const [tempValue, setTempValue] = useState(10);
  const [tempColor, setTempColor] = useState('cold');

  const increaseTemp = () => {
    if (tempValue === 30) return;
    const newTemp = tempValue + 1;
    if (newTemp >= 15) setTempColor('hot');
    setTempValue(newTemp);
  }

  const decreaseTemp = () => {
    if (tempValue === 0) return;
    const newTemp = tempValue - 1;
    if (newTemp < 15) setTempColor('cold');
    setTempValue(newTemp);
  }
  return (
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${tempColor}`}>{tempValue}°C</div>
      </div>
      <div className='button-container'>
        <button onClick={decreaseTemp}>-</button>
        <button onClick={increaseTemp}> +</button>
      </div>
    </div >
  )
}

export default App;