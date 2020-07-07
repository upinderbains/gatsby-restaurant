import React, { createContext, useReducer, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  ADD_CART,
  DELETE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  SET_COUNT,
} from "./actions"

export const StateContext = createContext()
export const DispatchContext = createContext()

const SET_CART = "SET_CART"
const RESET_CART = "RESET_CART"

const intialState = {
  items: [],
  cartItems: [],
  count: 0,
}

const isBrowser = () => typeof window !== "undefined"

const getState = () =>
  isBrowser() && window.localStorage.getItem("state")
    ? JSON.parse(window.localStorage.getItem("state"))
    : intialState

function reducer(state, action) {
  switch (action.type) {
    case SET_CART:
      const edges = action.payload
      return {
        ...state,
        items: edges,
      }
    case RESET_CART:
      return intialState

    case ADD_CART:
      const newItems = Object.assign({ quantity: 1 }, action.payload)
      const addItems = state.cartItems.concat(newItems)
      return {
        ...state,
        cartItems: addItems,
      }
    case DELETE_ITEM:
      const items = JSON.parse(JSON.stringify(state.cartItems))
      const filterItems = items.filter(({ id }) => id !== action.payload)
      return {
        ...state,
        cartItems: filterItems,
      }
    case INCREASE_ITEM:
      const increaseItem = JSON.parse(JSON.stringify(state.cartItems))
      const incItem = increaseItem.map(item => {
        if (item.id === action.payload) {
          if (item.quantity < 10) {
            item.quantity++
          }
        }
        return item
      })
      return {
        ...state,
        cartItems: incItem,
      }
    case DECREASE_ITEM:
      const decreaseItem = JSON.parse(JSON.stringify(state.cartItems))
      const decItem = decreaseItem.map(item => {
        if (item.id === action.payload) {
          if (item.quantity > 1) {
            item.quantity--
          }
        }
        return item
      })
      return {
        ...state,
        cartItems: decItem,
      }
    case SET_COUNT:
      const count = state.cartItems.reduce(
        (acc, { quantity }) => acc + quantity,
        0
      )
      return {
        ...state,
        count,
      }

    default:
      return state
  }
}

const useSiteMetadata = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/food/" } }) {
          edges {
            node {
              frontmatter {
                title
                price
                catogory
                image {
                  childImageSharp {
                    fluid(quality: 90) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
              id
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark
}

const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState, getState)
  const { edges } = useSiteMetadata()

  useEffect(() => {
    dispatch({ type: SET_CART, payload: edges })
    dispatch({ type: SET_COUNT })
  }, [])
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state))
  }, [state])
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default GlobalContext
