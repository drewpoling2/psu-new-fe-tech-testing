import React from 'react';

export const Divider = ({ props }) => {
  return (
    <>
      <div
        style={{
          marginTop: '-5rem',
          marginBottom: '-5rem',
          height: '45px',
          width: '2px',
        }}
        className="border-r-2 border-white border-dotted mx-6"
      ></div>
    </>
  );
};
