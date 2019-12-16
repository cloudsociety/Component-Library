import React from 'react';
import classnames from 'classnames';

import css from './Button.module.scss';

const Button = ({children}) => {
  return (
    <>
      <button className={classnames(css['vrst-button'])}>{children}</button>
    </>
  );
};

export default Button;
