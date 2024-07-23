import React, { useState } from 'react';
import ToggleButton from './ToggleButton';
import ManualMode from './ManualMode';
import AutoMode from './AutoMode';

// 로또 번호를 생성하는 함수
const generateLottoNumbers = () => {
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }
  return Array.from(numbers).sort((a, b) => a - b);
};

const Lotto = () => {
  const [isAuto, setIsAuto] = useState(true);
  const [lottoNumbers, setLottoNumbers] = useState(generateLottoNumbers());

  // 모드 토글 함수
  const handleToggle = () => {
    setIsAuto(!isAuto);
    if (!isAuto) {
      setLottoNumbers(generateLottoNumbers());
    }
  };

  // 수동 모드에서 번호 설정
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

export default Lotto;
