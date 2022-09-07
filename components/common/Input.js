import styled from 'styled-components';


export const Input = styled.input`
display: block;
padding: 14px;
font-size: 1.3rem;
margin-bottom: 12px;
border-radius: 4px;
border: 1px solid #ddd;
box-shadow: none;
height: 60px;

&:focus, &:active {
  border: 1px solid rebeccapurple;
}
`

export default Input;