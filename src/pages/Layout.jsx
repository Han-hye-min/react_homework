import React, { useState } from 'react';
import ToggleButton from './ToggleButton';
import ManualMode from './ManualMode';
import AutoMode from './AutoMode';

const generateLottoNumbers = () => {
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }
  return Array.from(numbers).sort((a, b) => a - b);
};

const Layout = () => {
  const [isAuto, setIsAuto] = useState(true);
  const [lottoNumbers, setLottoNumbers] = useState(generateLottoNumbers());

  const handleToggle = () => {
    setIsAuto(!isAuto);
    if (!isAuto) {
      setLottoNumbers(generateLottoNumbers());
    }
  };

  const handleManualSubmit = (numbers) => {
    setLottoNumbers(numbers.sort((a, b) => a - b));
  };

  return (
    <div>
      <ToggleButton isAuto={isAuto} onToggle={handleToggle} />
      {isAuto ? (
        <AutoMode lottoNumbers={lottoNumbers} />
      ) : (
        <ManualMode onManualSubmit={handleManualSubmit} />
      )}
    </div>
  );
};

export default Layout;
