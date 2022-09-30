import React from 'react';

export const Image = ({ width, height, Element, onClick, altText, src }) => {
  return (
    <div
      onClick={onClick}
      alt={altText}
      altText={altText}
      className="pointer"
    >
      <img
        style={{ width: width, height: height }}
        src={src}
        alt={altText}
      />
    </div>
  );
};
