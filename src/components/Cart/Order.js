import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { DispatchContext } from "../../context/GlobalContext"
import Img from "gatsby-image"
import {
  DELETE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  SET_COUNT,
} from "../../context/actions"

const Order = ({ items }) => {
  const dispatch = useContext(DispatchContext)

  const deleteItem = id => {
    dispatch({ type: DELETE_ITEM, payload: id })
    dispatch({ type: SET_COUNT })
  }

  const increaseItem = id => {
    dispatch({ type: INCREASE_ITEM, payload: id })
    dispatch({ type: SET_COUNT })
  }
  const decreaseItem = id => {
    dispatch({ type: DECREASE_ITEM, payload: id })
    dispatch({ type: SET_COUNT })
  }

  return (
    <Wrapper>
      {items &&
        items.map(({ frontmatter, id, quantity }) => {
          const { title, price, image } = frontmatter
          return (
            <div key={id} className="item">
              <StyledOrder>
                <div className="order">
                  <StyledImg fixed={image.childImageSharp.fluid} />
                  <h3 className="order-name">{title}</h3>
                </div>
                <p className="price">$ {price}</p>
              </StyledOrder>

              <StyledChange>
                <button
                  onClick={() => deleteItem(id)}
                  className="remove-button"
                >
                  Remove
                </button>
                <div className="change">
                  <p>Quantity:</p>
                  <Button
                    onClick={() => decreaseItem(id)}
                    disabled={quantity === 1}
                  >
                    &#8722;
                  </Button>
                  <ItemQuatity>{quantity}</ItemQuatity>
                  <Button
                    onClick={() => increaseItem(id)}
                    disabled={quantity === 10}
                  >
                    +
                  </Button>
                </div>
              </StyledChange>
            </div>
          )
        })}
    </Wrapper>
  )
}

export default Order

const Wrapper = styled.div`
  -webkit-box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 3px;
  margin: 0 5rem;
  flex: 1 1 600px;
  .item {
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
  @media (max-width: 900px) {
    flex: 0 0 auto;
    min-width: 400px;
  }
`

const StyledOrder = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;

  .order {
    display: flex;
  }

  .order-name {
    text-transform: capitalize;
    margin: 0rem 2rem;
    word-spacing: -5px;
  }
  .price {
    margin-left: 2rem;
    white-space: nowrap;
  }
`

const StyledChange = styled.div`
  border-top: 1px solid rgb(220, 220, 220);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0rem;

  .remove-button {
    color: rgb(118, 117, 109);
    background: transparent;
    font-size: var(--fs-3);
    text-decoration: underline;
  }
  .change {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgb(118, 117, 109);
    font-weight: 400;
  }
`

const StyledImg = styled(Img)`
  width: 10rem;
  height: 8rem;
  border-radius: 3px;
`

const Button = styled.button`
  background: transparent;
  color: rgb(118, 117, 109);
  outline: none;
  font-size: var(--fs-6);
  margin-left: 1.5rem;
  transition: all 0.3s;
  color: var(--color-coral);
  &:active {
    background: transparent;
  }
  &:disabled {
    color: var(--color-button-light);
    cursor: not-allowed;
  }
`

const ItemQuatity = styled.p`
  font-size: var(--fs-3);
  border: 1px solid rgb(118, 117, 109);
  padding: 0.2rem 1.2rem;
  border-radius: 10px;
  margin-left: 1.5rem;
`
