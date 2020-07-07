import React, { useState } from "react"
import styled from "styled-components"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

const Wrapper = styled.div`
  width: 15rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  .icon {
    color: var(--color-white);
    font-size: var(--fs-7);
    transition: all 0.3s;
    &:hover {
     transform: scale(1.1);
    }
  }
`
const Social = () => {
  const [icons] = useState([
    {
      icon: <FaFacebook className="icon facebook-icon" />,
      path: `https://www.facebook.com`,
    },
    {
      icon: <FaInstagram className="icon instagram-icon" />,
      path: `https://www.instagram.com`,
    },
    {
      icon: <FaTwitter className="icon twitter-icon" />,
      path: `https://www.twitter.com`,
    },
  ])
  return (
    <Wrapper>
      {icons &&
        icons.map((item, index) => (
          <a
            href={item.path}
            className="icon"
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
    </Wrapper>
  )
}

export default Social
