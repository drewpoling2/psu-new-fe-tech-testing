import React from 'react';

const VariantDefault = ({ text, onClick, disabled, href }) => {
  return (
    <div
      disabled={disabled}
      onClick={onClick}
      className="max-h-8 mx-1 bg-gradient-to-b from-blue-robinsEggBlue to-blue cursor-pointer px-11 py-1.5 mx-1 inline-flex items-center pointer hover:text-blue-lightBlue"
    >
      <a
        href={href}
        className="uppercase italic"
      >
        {text}
      </a>
    </div>
  );
};

const VariantHotline = ({ text, onClick, disabled, href }) => {
  return (
    <div
      disabled={disabled}
      onClick={onClick}
      className="max-h-8  mx-1 text-blue-lightBlue cursor-pointer py-1.5 px-8 mx-1 inline-flex items-center pointer hover:text-blue-bluishBlack hover:bg-yellow bg-blue-bluishBlack"
    >
      <a
        href={href}
        className="uppercase italic leading-none"
      >
        {text}
      </a>
    </div>
  );
};

const VariantIcon = ({ text, onClick, disabled, Icon, href, iconSize }) => {
  return (
    <div
      disabled={disabled}
      onClick={onClick}
      className="cursor-pointer inline-flex items-center pointer hover:text-gray"
    >
      <Icon
        className="pr-2"
        fontSize={iconSize}
      />

      <a
        className="uppercase"
        href={href}
      >
        {text}
      </a>
    </div>
  );
};

const variantButtons = {
  default: VariantDefault,
  hotLine: VariantHotline,
  icon: VariantIcon,
};

export const Button = ({
  onClick,
  variant = 'default',
  Icon,
  text,
  disabled,
  href,
  iconSize,
}) => {
  const Variant = variantButtons[variant];
  return (
    <Variant
      text={text}
      onClick={onClick}
      disabled={disabled}
      Icon={Icon}
      href={href}
      iconSize={iconSize}
    ></Variant>
  );
};
