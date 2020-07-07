import React from "react"
import styled from "styled-components"
import Social from "./social"
import logo from "../images/logo.svg"

const Wrapper = styled.footer`
  padding: 3rem;
  background: var(--color-main);
  font-size: var(--fs-3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  font-family: var(--ff-two);

  .logo-box {
    margin-top: 2rem;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .social {
    color: var(--color-white);
    text-align: center;
    text-transform: uppercase;
    font-size: var(--fs-4);
    font-family: var(--ff-one);

    @media(max-width: 768px){
      font-size: var(--fs-2);
    }
  }
  .copy {
    color: var(--color-white);
    text-transform: capitalize;
    font-size: var(--fs-2);
    display: inline-block;
    font-weight: 500;
  }
`
const StyledImg = styled.img`
  width: 100px;
  margin: 10px 20px;
`
const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3rem auto;
`

const ListItem = styled.li`
  margin: 1rem;
  &:not(:last-child) {
    padding-right: 2rem;
    border-right: 2px solid var(--color-white);

  }
`

const Link = styled.a`
  color: var(--color-white);
  text-transform: capitalize;
  font-size: var(--fs-3);
  font-weight: 400;
`
const Footer = () => {
  return (
    <Wrapper>
      <div className="logo-box">
        <StyledImg src={logo} alt="logo" />
        <div className="social">
          <h2>Connect with us</h2>
          <Social />
        </div>
      </div>
      <List>
        <ListItem>
          <Link href="#">About us</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Nutrition</Link>
        </ListItem>
        <ListItem>
          <Link href="#">FAQ</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Join Our Team</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Privacy Policy</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Contact us</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Terms of Use</Link>
        </ListItem>
      </List>
      <p className="copy">
        copyright &copy; 2020 food route. All rights reserved. Built by
        Upinder Bains
      </p>
    </Wrapper>
  )
}

export default Footer
