import styled from "styled-components"


const Button = styled.button`
  display: inline-block;
  color: ${props =>
    props.banner ? `var(--color-white)` : `var(--color-main)`};
  background: ${props => (props.banner ? `var(--color-main)` : `transparent`)};
  padding: 0.9em 1.5em;
  text-transform: uppercase;
  font-size: var(--fs-3);
  font-weight: 700;
  border-radius: 3px;
  letter-spacing: 1px;
  transition: all 0.3s;
  border-radius: 30px;
  &:hover {
    background: var(--color-second);
    color: var(--color-white);
    cursor: pointer;
  }
`

export default Button

