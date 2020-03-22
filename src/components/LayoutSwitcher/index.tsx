import React from "react"
import classnames from "classnames"

import css from "./index.module.scss"

interface IProps {
  children: React.ReactNode | Array<React.ReactNode>
  noGrow?: boolean
}

const LayoutSwitcher = ({ children, noGrow = false }: IProps) => {
  return (
    <div
      className={classnames(css.layoutSwitcher, {
        [css["layoutSwitcher--no-grow"]]: noGrow,
      })}
    >
      {React.Children.count(children) === 1 ? children : <div>{children}</div>}
    </div>
  )
}

export default LayoutSwitcher
