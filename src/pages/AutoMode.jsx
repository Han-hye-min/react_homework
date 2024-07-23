import React from 'react';

const AutoMode = ({ lottoNumbers }) => {
  return (
    <div>
      <h2>자동 생성된 번호:</h2>
      <div>{lottoNumbers.join(', ')}</div>
    </div>
  );
};

export default AutoMode;
