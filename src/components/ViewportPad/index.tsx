import React from "react"

import css from "./index.module.scss"

interface IProps {
  children: React.ReactNode | Array<React.ReactNode>
}

const ViewportPad = ({ children }: IProps) => {
  return <div className={css.viewportPad}>{children}</div>
}

export default ViewportPad
