import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`

  h1{
    color: black;
  }
  p, .p{
    color: #212529;
    font-size: 21px;
    font-weight: 300;
    line-height: 30px;
    margin-bottom: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  }
  ul,.ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    &:hover, &:active, &:focus{
      color: #5454d4 ;
      outline: none !important;
    }
  }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
    input[type="number"] {
      -moz-appearance: textfield; /* Firefox */
    }
`;

export default globalStyle;