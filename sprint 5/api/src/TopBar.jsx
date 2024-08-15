import React from 'react';

const TopBar = () => {
  return (
    <div style={{
      width: '100%',
      height: '30px',
      backgroundColor: '#000',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 10px',
      fontSize: '14px'
    }}>
      <div>
        <span>21:40</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '20px' }}> 80%🔋</span>
      </div>
    </div>
  );
};

export default TopBar;
