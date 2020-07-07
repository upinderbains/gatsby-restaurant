import React, {
  useState,
  useLayoutEffect,
  useRef,
  useContext,
  useEffect,
} from "react"
import styled from "styled-components"
import Ham from "./ham"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { navLinks } from "../../config"
import { FiShoppingCart } from "react-icons/fi"
import { StateContext } from "../../context/GlobalContext"

const Container = styled.nav`
  width: 100%;
  background: var(--color-main);
  transition: all 300ms
    ${props => (props.scroll === "up" ? "ease-in" : "ease-out")};
  box-shadow: ${props =>
    props.scroll === "up" ? `0 0.5rem 2rem rgba(0, 0, 0, 0.65)` : "none"};
  transform: translateY(
    ${props => (props.scroll === "down" ? `-80px` : "0px")}
  );
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  @media (max-width: 768px) {
    transform: translateY(0px);
  }

  .nav {
    max-width: 1500px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 0rem auto;
  }
`

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  margin-right: 50px;
  transition: all 0.5s;

  @media (max-width: 768px) {
    display: none;
  }
`
const ListItem = styled.li`
  margin-right: 30px;
  text-align: center;
  transition: all 0.3s;
  display: flex;

  .active {
    border-bottom: 2px solid var(--color-white);
    border-radius: 1px;
  }
`
const ListLink = styled(Link)`
  font-size: var(--fs-5);
  color: var(--color-white);
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  

  .icon {
    width: 30px;
  }
  .cart-Items {
    position: absolute;
    top: 20px;
    right: -10px;
    font-size: var(--fs-1);
    background-color: var(--color-white);
    color: var(--color-main);
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 5px;
  }
`
const StyledImg = styled.img`
  width: 100px;
  margin: 10px 50px;
`

const Nav = () => {
  const [scroll, setScroll] = useState("none")
  const [prevPos, setprevPos] = useState(0)
  const el = useRef(null)
  const [numItems, setNumItems] = useState(0)

  const state = useContext(StateContext)

  useEffect(() => {
    setNumItems(state.count)
  }, [state])

  const elementPos = 20
  let throttleTimeout = null
  let wait = 300

  const callBack = () => {
    const currPos = window.scrollY

    if (currPos <= elementPos) {
      setScroll("")
    } else if (currPos > prevPos && currPos > elementPos) {
      setScroll("down")
    } else if (currPos + window.innerHeight < document.body.scrollHeight) {
      setScroll("up")
    }
    setprevPos(currPos)
    throttleTimeout = null
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, 300)
        }
      } else {
        callBack()
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevPos, scroll])

  return (
    <Container ref={el} scroll={scroll}>
      <div className="nav">
        <StyledImg src={logo} alt="logo" />
        <Ham />
        <List>
          {navLinks.map(({ name, url }, index) => (
            <ListItem key={index}>
              <ListLink to={url} activeClassName="active">
                {name}
              </ListLink>
            </ListItem>
          ))}
          <ListItem>
            <ListLink to="/cart/" activeClassName="active">
              <FiShoppingCart className="icon" />
              {numItems && numItems > 0 ? (
                <span className="cart-Items">{numItems}</span>
              ) : (
                ""
              )}
            </ListLink>
          </ListItem>
        </List>
      </div>
    </Container>
  )
}

export default Nav
