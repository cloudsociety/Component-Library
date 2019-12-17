import React from 'react';

import css from './LayoutCover.module.scss';

interface IProps {
  children: React.ReactNode | Array<React.ReactNode>;
  minHeight?: number;
}

const LayoutCover = ({children, minHeight = 100}: IProps) => {
  return (
    <div
      className={css['vrst-layout-cover']}
      style={{minHeight: `${minHeight}vh`}}>
      {children}
    </div>
  );
};

export default LayoutCover;
