import React from "react"
import classnames from "classnames"

import css from "./index.module.scss"

interface IProps {
  children: [React.ReactNode, React.ReactNode] // Require 2 children exactly.
  minWidth?: string
  rightForDesktop?: boolean
  rightForAll?: boolean
  swapOrder?: boolean
  classes?: string
}
const LayoutSidebar = ({
  children,
  minWidth = "13rem",
  rightForDesktop = false,
  rightForAll = false,
  swapOrder = false,
  classes,
}: IProps) => {
  return (
    <div
      className={classnames(
        css.layoutSidebar,
        {
          [css["layoutSidebar--right-for-desktop"]]: rightForDesktop,
          [css["layoutSidebar--right-for-all"]]: rightForAll,
          [css["layoutSidebar--swap-order"]]: swapOrder,
        },
        classes
      )}
    >
      <div>
        {children.map((child: React.ReactNode, index: number) => {
          //
          if (index === 0 && !swapOrder)
            return <div style={{ minWidth }}>{child}</div>
          if (index === 1 && swapOrder)
            return <div style={{ minWidth }}>{child}</div>
          return <div>{child}</div>
        })}
      </div>
    </div>
  )
}

export default LayoutSidebar
