import React from "react"

import css from "./index.module.scss"

const LayoutCover = ({ children, minHeight = 100 }) => {
  return (
    <div className={css.layoutCover} style={{ minHeight: `${minHeight}vh` }}>
      {children}
    </div>
  )
}

export default LayoutCover
