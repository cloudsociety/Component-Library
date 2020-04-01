import React from "react";

import css from "./index.module.scss";

interface IProps {
  // Either one or 4 children.
  children:
    | React.ReactNode
    | [React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode];
}

const Layout421 = ({ children }: IProps) => {
  return (
    <div className={css.layout421}>
      {React.Children.count(children) === 1 ? children : <div>{children}</div>}
    </div>
  );
};

export default Layout421;
