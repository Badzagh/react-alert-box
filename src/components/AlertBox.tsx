import React from 'react';

interface AlertBoxProps {
  message: string;
}

const AlertBox: React.FC<AlertBoxProps> = ({ message }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      {message}
    </div>
  );
};

export default AlertBox;