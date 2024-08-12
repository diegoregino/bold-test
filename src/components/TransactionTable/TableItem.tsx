import clsx from 'clsx';
import React from 'react';

type TableItemProps = {
  children: React.ReactElement;
};

const TableItem: React.FC<TableItemProps> = ({ children }) => {
  return (
    <td className={clsx('border-b-2 border-bold-light-grey first:border-l-4 border-l-bold-blue py-2')}>{children}</td>
  );
};

export default TableItem;
