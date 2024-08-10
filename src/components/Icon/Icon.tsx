import IconsIndex from './iconsIndex';
import styles from './Icon.module.scss';
import React from 'react';
import clsx from 'clsx';

type IconProps = {
  iconId: string
}

const Icon: React.FC<IconProps> = ({iconId}) => {
  return <span className={clsx(styles.icon)}>{IconsIndex[iconId]}</span>;
};

export default Icon;
