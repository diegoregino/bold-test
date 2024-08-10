import clsx from 'clsx';
import styles from './Modal.module.scss';
import Icon from '../Icon/Icon';
import React, { ReactElement } from 'react';

type ModalProps = {
  children: ReactElement;
};

const Modal: React.FC<ModalProps> = ({children}) => {
  return (
    <dialog className={clsx(styles.dialog)} open>
      <div className={clsx(styles['dialog--close'])}>
        <Icon iconId="close" />
      </div>
      <div className={clsx(styles['dialog--content'])}>{children}</div>
    </dialog>
  );
};

export default Modal;
