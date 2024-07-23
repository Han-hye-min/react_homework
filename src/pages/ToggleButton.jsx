import React from 'react';

const ToggleButton = ({ isAuto, onToggle }) => {
  return (
    <button onClick={onToggle}>
      {isAuto ? '수동 모드로 전환' : '자동 모드로 전환'}
    </button>
  );
};

export default ToggleButton;
