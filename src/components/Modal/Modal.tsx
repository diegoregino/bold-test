import clsx from 'clsx';
import styles from './Modal.module.scss';
import Icon from '../Icon/Icon';
import React, { ReactElement } from 'react';

type ModalProps = {
  children: ReactElement;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <dialog className={clsx(styles.dialog)} open>
      <div className={clsx(styles['dialog--close'])} onClick={onClose}>
        <Icon iconId="close" />
      </div>
      <div className={clsx(styles['dialog--content'])}>{children}</div>
    </dialog>
  );
};

export default Modal;
