// src/RangeInput.js
import { useState } from 'react';
import './RangeInput.scss';

interface RangeInputProps {
  min: number;
  max: number;
}

const RangeInput = ({ min, max }: RangeInputProps) => {
  const [startValue, setStartValue] = useState(min);
  const [finishValue, setFinishValue] = useState(max);

  // @ts-ignore
  const handleStartChange = e => {
    const value = Math.min(e.target.value, finishValue - 1);
    setStartValue(value);
  };

  // @ts-ignore
  const handleFinishChange = e => {
    const value = Math.max(e.target.value, startValue + 1);
    setFinishValue(value);
  };

  return (
    <div className="range-input-container">
      <div className="range-input">
        <input
          type="range"
          min={min}
          max={max}
          value={startValue}
          onChange={handleStartChange}
          className="thumb thumb-left"
          style={{ zIndex: startValue > max - 100 ? '5' : '1' }}
        />
        <input type="range" min={min} max={max} value={finishValue} onChange={handleFinishChange} className="thumb thumb-right" />
      </div>
      <div className="range-values">
        <span>{startValue}</span> - <span>{finishValue}</span>
      </div>
    </div>
  );
};

export default RangeInput;
