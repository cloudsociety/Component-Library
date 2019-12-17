import React from 'react';

import css from './LayoutStack.module.scss';

interface IProps {
  children: React.ReactNode | Array<React.ReactNode>;
  spacing?: number;
}

const LayoutStack = ({children, spacing}: IProps) => {
  return (
    <div
      className={css['vrst-layout-stack']}
      style={{['--space' as any]: `${spacing}rem`}}>
      {children}
    </div>
  );
};

export default LayoutStack;
