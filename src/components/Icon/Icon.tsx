import IconsIndex from './iconsIndex';
import React from 'react';
import clsx from 'clsx';

type IconProps = {
  iconId: string
}

const Icon: React.FC<IconProps> = ({iconId}) => {
  return <span className={clsx('flex h-4 w-4')}>{IconsIndex[iconId]}</span>;
};

export default Icon;
