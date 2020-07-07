import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import { StateContext } from "../../context/GlobalContext"
import { Section } from "../../styles/"
import Product from "./Product"
import Header from "../header"
import Banner from "../banner"

const Menu = ({ image }) => {
  const state = useContext(StateContext)

  const [items, setItems] = useState({
    catogories: ["mains", "burgers & wraps", "salads", "sides", "drinks"],
    cartItems: [],
    foodItems: [],
  })
  const [active, setActive] = useState("")

  useEffect(() => {
    setItems({
      ...items,
      cartItems: state.cartItems,
    })
  }, [state])

  useEffect(() => {
    handleItems("mains")
  }, [])
  const filterItems = key => {
    const filteredItems = state.items.filter(
      ({ node }) => node.frontmatter.catogory === key
    )
    return filteredItems
  }
  const handleItems = item => {
    switch (item) {
      case "starters":
        setItems({
          ...items,
          foodItems: filterItems(item),
        })
        setActive("starters")
        break
      case "mains":
        setItems({
          ...items,
          foodItems: filterItems(item),
        })
        setActive("mains")
        break
      case "burgers & wraps":
        setItems({
          ...items,
          foodItems: filterItems(item),
        })
        setActive("burgers & wraps")
        break
      case "salads":
        setItems({
          ...items,
          foodItems: filterItems(item),
        })
        setActive("salads")
        break
      case "sides":
        setItems({
          ...items,
          foodItems: filterItems(item),
        })
        setActive("sides")
        break
      case "drinks":
        setItems({
          ...items,
          foodItems: filterItems(item),
        })
        setActive("drinks")
        break
    }
  }

  return (
    <>
      <Header img={image}>
        <Banner title={active}>
          <MenuList>
            {items &&
              items.catogories.map((el, index) => {
                return (
                  <ListItems activeClass={active} element={el} key={index}>
                    <button onClick={() => handleItems(el)}>{el}</button>
                  </ListItems>
                )
              })}
          </MenuList>
        </Banner>
      </Header>
      <StyledSection>
        <Product product={items.foodItems} cart={items.cartItems} />
      </StyledSection>
    </>
  )
}

export default Menu

const StyledSection = styled(Section)`
  min-height: 70vh;
  margin: 0 auto;
`

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  justify-content: space-around;
  border-radius: 50px;
  margin: 5rem;
  background: var(--color-grey-light-2);
  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 30px;
  }
`

const ListItems = styled.li`
  text-align: center;
  padding: 2rem;
  button {
    color: inherit;
    font-size: var(--fs-5);
    text-transform: capitalize;
    background: transparent;
    width: 100%;
    font-weight: 700;
    transition: all 0.3s;
    color: ${({ activeClass, element }) =>
      activeClass === element
        ? `var(--color-main)`
        : `var(--color-button-light)`};
    &:hover {
      color: var(--color-main);
      transform: scale(1.1);
    }
    @media (max-width: 768px) {
      font-size: var(--fs-4);
    }
  }
  @media (max-width: 768px) {
    padding: 1rem;
  }
`
