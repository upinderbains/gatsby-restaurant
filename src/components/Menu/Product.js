import React, { useContext, useEffect, useState } from "react"
import Img from "gatsby-image"
import { Button } from "../../styles/"
import styled from "styled-components"
import { DispatchContext } from "../../context/GlobalContext"
import { ADD_CART, INCREASE_ITEM, SET_COUNT } from "../../context/actions"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 350px;

  .image {
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const FoodItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 30rem));
  grid-gap: 6rem;

  width: 80%;
  justify-content: center;
  margin: 5rem auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`

const Heading = styled.h2`
  text-transform: capitalize;
  font-size: var(--fs-4);
  text-align: center;
  line-height: 1.2em;

  width: 100%;
  margin-top: 2rem;

`

const Price = styled.h6`
  font-size: var(--fs-3);
  color: var(--color-main);
  margin: 1rem 0rem;
`

const StyledButton = styled(Button)`
  text-transform: capitalize;
  width: 90%;

  &:disabled {
    color: var(--color-grey-light-1);
    opacity: 0.8;
    background-color: var(--color-second);
    cursor: default;
  }
`

const StyledImage = styled(Img)`
  width: 90%;
  object-fit: contain;
`

const Product = ({ product, cart }) => {
  const dispatch = useContext(DispatchContext)
  const [added, setAdded] = useState([])

  console.log(product)
  useEffect(() => {
    setAdded(cart.reduce((acc, { id }) => [...acc, id], []))
  }, [cart])

  const addToCart = productId => {
    const payload =
      product[product.findIndex(({ node }) => node.id === productId)].node
    dispatch({ type: ADD_CART, payload })
    dispatch({ type: SET_COUNT })
  }

  return (
    <FoodItems>
      {product &&
        product.map(({ node }) => {
          const { frontmatter, id } = node
          const { title, price, image } = frontmatter
          return (
            <li key={id}>
              <Wrapper>
                <div className="image">
                  <StyledImage fluid={image.childImageSharp.fluid} />
                </div>
                <Heading>{title}</Heading>
                <Price>${price}</Price>
                <StyledButton
                  banner
                  onClick={() => addToCart(id)}
                  disabled={
                    added.length > 0 && added.some(value => value == id)
                  }
                >
                  {added.length > 0 && added.some(value => value == id)
                    ? "added"
                    : "add to cart"}
                </StyledButton>
              </Wrapper>
            </li>
          )
        })}
    </FoodItems>
  )
}

export default Product
