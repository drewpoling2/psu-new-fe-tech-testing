import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { CustomIconButton } from '../CustomIconButton/CustomIconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchIcon from '@mui/icons-material/Search';
import { Divider } from '../Divider/Divider';
import { Image } from '../Image/Image';
import altoonaLogo from '../Image/assets/logo.png';
export const Nav = ({ props }) => {
  const [text, setText] = useState('');
  //toggles menu open
  const onUserClick = (element) => {
    setText(`${element} clicked`);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-blue-robinsEggBlue via-blue to-blue-darkNavyBlue leading-none">
        <div className="container my-6 inline-flex justify-between w-full items-center">
          <Image
            altText={'Psu Altoona Logo'}
            src={altoonaLogo}
            width="100%"
            height="44px"
            onClick={() => onUserClick('Logo')}
          />
          <div className="inline-flex items-center">
            <div className="inline-flex">
              <Button
                text={'Hotline'}
                variant="hotLine"
                onClick={() => onUserClick('Hotline')}
                iconSize={'large'}
              />
              <Button
                text={'Visit'}
                variant="default"
                onClick={() => onUserClick('Visit')}
                iconSize={'large'}
              />
              <Button
                text={'Apply'}
                variant="default"
                onClick={() => onUserClick('Apply')}
                iconSize={'large'}
              />
            </div>
            <Divider height={'45px'} />
            <div className="inline-flex items-center">
              <CustomIconButton
                Icon={SearchIcon}
                onClick={() => onUserClick('Search')}
              />
              <Button
                text={'Menu'}
                variant="icon"
                Icon={MenuRoundedIcon}
                onClick={() => onUserClick('Menu')}
                iconSize={'large'}
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-black">{text}</h1>
    </>
  );
};
