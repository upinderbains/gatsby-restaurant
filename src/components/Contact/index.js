import React, { useState } from "react"
import styled from "styled-components"
import Section from "../../styles/section"
import Button from "../../styles/button"
import { FaPhoneAlt, FaMapMarkerAlt, FaRegClock } from "react-icons/fa"

const Contact = () => {
  const [status, setStatus] = useState("")

  const submitForm = ev => {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus("SUCCESS")
      } else {
        setStatus("ERROR")
      }
    }
    xhr.send(data)
  }
  return (
    <StyledSection>
      <Form
        onSubmit={submitForm}
        action="https://formspree.io/maypjvza"
        method="POST"
      >
        <FormGroup>
          <input
            type="text"
            name="first-name"
            className="form-input"
            id="first-name"
            placeholder="First Name"
            autoComplete="off"
            required
          />
          <Label htmlFor="first-name">First Name</Label>
        </FormGroup>
        <FormGroup>
          <input
            type="text"
            name="last-name"
            className="form-input"
            id="last-name"
            placeholder="Last Name"
            autoComplete="off"
            required
          />
          <Label htmlFor="last-name">Last Name</Label>
        </FormGroup>

        <FormGroup>
          <input
            type="text"
            className="form-input"
            name="_replyto"
            id="email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <Label htmlFor="email">Email</Label>
        </FormGroup>

        <FormGroup>
          <textarea
            className="form-input"
            type="text"
            name="message"
            rows="5"
            placeholder="Your message here..."
            required
          />
        </FormGroup>
        <div>
          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <StyledButton banner>Submit</StyledButton>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </div>
      </Form>

      <StyledInfo>
        <StyledInfoGroup>
          <h3>phone</h3>
          <Info>
            <FaPhoneAlt className="icon" />
            <p>1800-9999-999</p>
          </Info>
        </StyledInfoGroup>
        <StyledInfoGroup>
          <h3>address</h3>
          <Info>
            <FaMapMarkerAlt className="icon" />
            <p>4578 Marmora St, Toronto D94 82GTY</p>
          </Info>
        </StyledInfoGroup>
        <StyledInfoGroup>
          <h3>opening hours</h3>
          <Info>
            <FaRegClock className="icon" />
            <p>10:00am-11:00pm</p>
          </Info>
        </StyledInfoGroup>
      </StyledInfo>
    </StyledSection>
  )
}

export default Contact

const StyledSection = styled(Section)`
  display: flex;
  align-items: flex-start;
  padding: 5rem 0rem;
  max-width: 1100px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`

const Form = styled.form`
  width: 400px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  text-align: center;
  margin-left: auto;
  @media (max-width: 900px) {
    margin-left: 2rem;
  }
`

const Label = styled.label`
  position: absolute;
  left: 2rem;
  top: 0;
  color: var(--color-grey-dark-1);
  font-size: var(--fs-3);
  font-weight: 700;
  display: block;
  transition: all 0.3s;
  pointer-events: none;
  letter-spacing: 1px;
`
const FormGroup = styled.div`
  position: relative;
  width: 100%;
  margin: 1rem auto;

  .form-input {
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    border: none;
    outline: none;
    border-bottom: 3px solid transparent;
    padding: 1.5rem 2rem;
    font-family: inherit;
    color: black;
    font-size: var(--fs-4);
    border-radius: 30px;
    position: relative;
    letter-spacing: 1px;
    margin-top: 3rem;
    display: block;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-text-fill-color: black;
      transition: all 5000s ease-in-out 0s;
    }
    &:focus {
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
      border: 1px solid green;
    }
    &:focus:invalid {
      border: 1px solid var(--color-main);
    }
    &::-webkit-input-placeholder {
      color: var(--color-grey-dark-2);
    }
    &:placeholder-shown + label {
      opacity: 0;
      visibility: hidden;
      transform: translateY(4rem);
    }
  }
`
const StyledButton = styled(Button)`
  margin-top: 3rem;
  display: block;
  width: 100%;
`

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 5rem auto 2rem auto;
  @media (max-width: 900px) {
    margin-top: 10rem;
  }
`

const StyledInfoGroup = styled.div`
  margin-bottom: 5rem;
  h3 {
    text-transform: uppercase;
    border-bottom: 1px solid grey;
    margin-bottom: 2rem;
  }
`
const Info = styled.div`
  display: flex;
  align-items: center;

  .icon {
    color: var(--color-second);
    width: 20px;
    height: 20px;
    margin-right: 2rem;
  }
  p{
   font-size: var(--fs-3);
   color: var(--color-grey-dark-2);
   letter-spacing: 1px;
  }
`
