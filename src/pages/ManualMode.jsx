import React, { useState } from 'react';

const ManualMode = ({ onManualSubmit }) => {
  const [manualNumbers, setManualNumbers] = useState(['', '', '', '', '', '']);

  const handleInputChange = (index, value) => {
    const newNumbers = [...manualNumbers];
    newNumbers[index] = value;
    setManualNumbers(newNumbers);
  };

  const handleSubmit = () => {
    const numbers = manualNumbers
      .map(num => parseInt(num, 10))
      .filter(num => !isNaN(num) && num > 0 && num <= 45);

    const uniqueNumbers = Array.from(new Set(numbers));
    if (uniqueNumbers.length === 6) {
      onManualSubmit(uniqueNumbers);
    } else {
      alert('6개의 고유한 숫자를 정확히 입력하세요.');
    }
  };

  return (
    <div>
      <h2>수동 입력 모드</h2>
      {manualNumbers.map((num, index) => (
        <input
          key={index}
          type="number"
          value={num}
          onChange={(e) => handleInputChange(index, e.target.value)}
          min="1"
          max="45"
        />
      ))}
      <button onClick={handleSubmit}>로또 번호 생성</button>
    </div>
  );
};

export default ManualMode;
