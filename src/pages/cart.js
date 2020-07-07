import React, { useContext } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StateContext, DispatchContext  } from "../context/GlobalContext"

import Cart from "../components/Cart"

const CartPage = () => {
  const state = useContext(StateContext)
  const dispatch = useContext(DispatchContext)
  return (
    <Layout>
      <SEO title="Contact" />
      <Cart />
    </Layout>
  )
}

export default CartPage

//
