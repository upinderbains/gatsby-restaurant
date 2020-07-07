import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import Section from "../../styles/section"
import { StateContext } from "../../context/GlobalContext"

import Order from "./Order"

const Cart = () => {
  const state = useContext(StateContext)

  const [items, setItems] = useState([])
  const [total, setTotal] = useState({
    subtotal: 0,
    tax: 0,
    total: 0,
  })

  useEffect(() => {
    setItems(state.cartItems)
    calculateTotal()
  }, [state, items])

  const calculateTotal = () => {
    if (items && items.length > 0) {
      const totalItems = items.map(({ frontmatter, quantity }) => {
        const { price } = frontmatter
        return { price, quantity }
      })
      const subtotal = totalItems.reduce(
        (acc, { price, quantity }) => acc + price * quantity,
        0
      )
      const tax = Number((subtotal * 0.13).toFixed(2))
      const total = Number((subtotal + tax).toFixed(2))
      setTotal({
        subtotal: subtotal.toFixed(2),
        tax,
        total,
      })
    }
  }

  return (
    <StyledSection>
      <h1 className="heading">Your order</h1>
      {items && items.length > 0 ? (
        <Wrapper>
          <Order items={items} />
          <List>
            <h2 className="summary">order details</h2>
            <ListItem>
              <p className="text">subtotal</p>
              <p className="price">$ {total.subtotal}</p>
            </ListItem>
            <ListItem>
              <p className="text">tax</p>
              <p className="price">$ {total.tax}</p>
            </ListItem>
            <ListItem>
              <p className="total">total</p>
              <p className="total">$ {total.total}</p>
            </ListItem>
            <ListItem>
              <p className="disclaimer">
                Adults and youth (ages 13 and older) need an average of 2,000
                calories a day, and children (ages 4 to 12) need an average of
                1,500 calories a day.
                <span className="disclaimer-bt">
                  However, individual needs may vary.
                </span>
              </p>
            </ListItem>
          </List>
        </Wrapper>
      ) : (
        <Empty>Your Cart is empty</Empty>
      )}
    </StyledSection>
  )
}

export default Cart

const StyledSection = styled(Section)`
  margin-top: 70px;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  flex-direction: column;
  .heading {
    text-transform: capitalize;
    margin-bottom: 5rem;
    font-size: var(--fs-7);
  }
`
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`

const List = styled.ul`
  max-width: 400px;
  padding: 2rem;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1 1 auto;
  @media (max-width: 900px) {
    margin-top: 5rem;
    flex: 0 1 auto;
  }

  .summary {
    text-transform: capitalize;
    margin-bottom: 3rem;
  }
`
const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  font-weight: 400;
  :nth-child(3) {
    border-bottom: 1px solid rgb(220, 220, 220);
    padding-bottom: 2rem;
  }

  .text {
    text-transform: capitalize;
  }
  .price {
    color: rgb(118, 117, 109);
    font-weight: 400;
  }
  .disclaimer {
    text-align: center;
    margin-top: 2rem;
  }
  .disclaimer-bt {
    display: block;
    padding-top: 2rem;
  }
  .total {
    font-weight: 700;
    text-transform: capitalize;
  }
`

const Empty = styled.h1`
  text-transform: uppercase;
  font-size: var(--fs-5);
  background-color: var(--color-grey-light-2);
  padding: 2rem 3rem;
  border-radius: 5px;
  color: rgb(118, 117, 109);
`
