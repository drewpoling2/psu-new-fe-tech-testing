import * as React from 'react';
import IconButton from '@mui/material/IconButton';

export const CustomIconButton = ({ ariaLabel, Icon, onClick, iconSize }) => {
  const buttonSX = {
    bgcolor: 'white',
    mr: 2.5,
    p: 0.7,
    '&:hover': {
      bgcolor: 'silver',
    },
  };

  return (
    <IconButton
      sx={buttonSX}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <Icon
        className=" text-blue-bluishBlack"
        fontSize={iconSize}
      />
    </IconButton>
  );
};
