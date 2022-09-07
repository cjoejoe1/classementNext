import styled from "styled-components";
import iconQuote from "../../assets/quote-icon.png";

const Post = styled('div')`
  overflow: hidden;
  font-size: 1rem;
  max-width: 800px;
  margin: auto;
  margin-top: 40px;
  h2,h3,h4,h5,h6,p,blockquote,pre,ul,
  ol {
    margin-bottom: 1.25rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  h2{
    font-size: 32px;
  }
  h3{
    font-size: 25px;
  }
  h4{
    font-size: 22px;
  }
    p{
        color: #1D2D35;
        font-family: Garamond;
        letter-spacing: normal;
        font-size: 22px;
        font-weight: 300;
        line-height: 1.476;
    }
    ul, li, p {
      margin-top: 30px;
      margin-bottom: 30px;
      color: #1D2D35;
      font-family: Garamond;
      letter-spacing: normal;
      font-size: 22px;
    }
    a {
        color: #e4234f;
        font-family: Garamond;
        letter-spacing: normal;
        font-size: 22px;
        font-weight: 300;
        line-height: 1.476;
    }
 
  h2,h3,h4,h5,
  h 6 {
    margin-top: 2.25rem;
    margin-bottom: 1.25rem;
    color: ${({ theme }) => theme.colors.heading} !important;
  }
  ol li {
    list-style-type: decimal;
  }
  ul li {
    list-style-type: disc;
  }
  blockquote {
    margin-bottom: 1.25rem;
    padding-left: 50px;
    position: relative;
    color: ${({ theme }) => theme.colors.text} !important;
    font-size: 20px;
    &::after {
      content: url(${iconQuote});
      display: inline-block;
      min-width: 28px;
      max-width: 28px;
      margin-top: 8px;
      margin-right: 23px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  img,
  iframe,
  video {
    max-width: 100%;
    margin-bottom: 2rem;
    display: block;
  }
`;



export default Post;