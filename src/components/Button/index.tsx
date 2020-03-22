import React from "react";
import classnames from "classnames";

import css from "./index.module.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  buttonStyle?: "normal" | "hollow" | "link";
  large?: boolean;
  classes?: string;
}

const Button = ({
  children,
  type,
  disabled = false,
  secondary = false,
  buttonStyle = "normal",
  large = false,
  classes = "",
  ...otherProps
}: IProps) => {
  return (
    <button
      type={type}
      className={classnames(
        css.button,
        css[`button--${buttonStyle}`],
        {
          [css["button--secondary"]]: secondary,
          [css["button--large"]]: large
        },
        classes
      )}
      disabled={disabled}
      {...otherProps}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
