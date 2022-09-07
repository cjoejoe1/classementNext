
import styled from 'styled-components'

export const TextBlock = styled.div`
text-align: justify;
margin: auto;
font-size: 21px;
h1{
  margin-top: 100px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 60px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -2.5px
}
h2{
  font-weight: 700;
  font-size: 40px;
  text-align: left;
  margin-bottom: 30px;
}
h3{
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 32px;
  text-align: left;
}
p{
  color: #212529 !important;
  font-family: Montserrat;
  letter-spacing: normal;
  font-size: 21px !important;
  font-weight: 300;
  line-height: 1.476;
  margin-bottom: 20px !important;
}
ul{
  text-align: justify;
  margin-bottom: 50px;
  font-size: 21px;
  font-weight: 300;
  letter-spacing: -0.66px;
  line-height: 38px;
}
li {
  color: #212529 !important;
    margin-left: 20px;
    font-family: Montserrat;
    display: list-item;
    font-size: 21px;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: normal;
}
`

export default TextBlock;