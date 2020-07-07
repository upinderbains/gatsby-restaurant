import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
:root {
    --color-primary: #020c1b;
    --color-secondary: #0B3C5D;
    --color-navy-light: rgba(11,60,93,0.8);
    --color-white: #ffffff;
    --color-pink: #EC576B;
    --color-button-light: rgba(16, 16, 16, 0.3);
 
    --color-main: #dd173b;
    --color-second: #029cd4;

    --color-grey-light-1: #faf9f9;
    --color-grey-light-2: #f4f2f2;
    --color-grey-light-3: #f0eeee;

    --color-grey-dark-1: #333;
    --color-grey-dark-2: #777;
    --color-grey-dark-3: #999;

    --ff-one: 'Oswald', 'sans-serif', 'Helvetica', 'Arial';
    --ff-two: 'Roboto', 'Lato', 'Helvetica', 'Arial', 'sans-serif';
    --ff-three: 'Acme', 'Helvetica', 'Arial', 'sans-serif';

    --fs-1: 1.2rem;
    --fs-2: 1.4rem;
    --fs-3: 1.6rem;
    --fs-4: 1.8rem;
    --fs-5: 2rem;
    --fs-6: 2.2rem;
    --fs-7: 3.2rem;
    --fs-8: 3.5rem;
    --fs-9: 4rem;
    --fs-10: 4.5rem;
    --fs-11: 5rem;
}
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
html {
box-sizing: border-box;
font-size: 62.5%;
}
body{
    font-family: var(--ff-one);
    font-weight: 600;
    line-height: 1.6;
    font-size: var(--fs-2);
    color: var(--color-darkNavy);
    background: var(--color-white);
}
h1,h2,h3,h4,h5,h6 {
    font-weight: 600;
    letter-spacing: 0.25rem;
    font-family: var(--ff-one);
}

img{
    width: 100%;
    max-width: 100%;
}
svg{
    width: 100%;
    height: 100%;
}
a{
    text-decoration: none;
    cursor: pointer;
}
button{
    cursor: pointer;
    border: 0;
    outline: none;
}
ul{
    list-style: none;
    li {
        cursor: pointer;
    }
}
`
export default GlobalStyles
