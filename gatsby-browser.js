import React from "react"

import GlobalContext from "./src/context/GlobalContext"

export const wrapRootElement = ({ element }) => {
  return <GlobalContext>{element}</GlobalContext>
}
