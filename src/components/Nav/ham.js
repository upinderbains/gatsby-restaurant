import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { navLinks } from "../../config"

const StyledHam = styled.div`
  width: 4rem;
  height: 4rem;
  position: fixed;
  top: 20px;
  right: 40px;
  z-index: 100;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 100%;
    height: 0.4rem;
    background-color: var(--color-coral);
    border-radius: 20px;
    transform-origin: 1px;
    transition: all 0.2s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const List = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-flow: column;
  padding-top: 10rem;
  background-color: var(--color-navy-light);
  transition: all 0.3s;
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100vw)")};
  display: none;
  z-index: 20;
  @media (max-width: 768px) {
    display: flex;
  }
`
const ListItem = styled.li`
  display: block;
  width: 100%;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s;
  .active {
    color: var(--color-coral);
  }

  &:hover {
    background-color: var(--color-primary);
  }
`
const ListLink = styled(Link)`
  font-size: var(--fs-3);
  color: var(--color-white);
  transition: all 0.3s;
  &:hover {
    color: var(--color-coral);
  }
`

const Ham = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <List show={open}>
        {navLinks.map(({ name, url }, index) => (
          <ListItem key={index}>
            <ListLink to={url} activeClassName="active">
              {name}
            </ListLink>
          </ListItem>
        ))}
      </List>
      <StyledHam open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledHam>
    </>
  )
}

export default Ham
