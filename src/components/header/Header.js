import styled from 'styled-components';
import {color} from "../../global/style-utils";

const HeaderElem = styled.header`
  width: 100vw;
  height: 56px;
  background-color: ${color.black};
  display: flex;
  padding-left: 15px;
`;

const BurgerContainer = styled.div`
  display: flex;
  height: 13px;
`;

const Burger = styled.span`
  position: relative;
  width: 20px;
  height: 3px;
  border-radius: 1px;
  background-color: ${color.white};
  display: flex;
  flex-flow: column;

  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 3px;
    margin-bottom: 2px;
    background-color: ${color.white};
    border-radius: 1px;
  }

  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 3px;
    margin-top: 2px;
    background-color: ${color.white};
    border-radius: 1px;
  }
`

export default function Header() {
  return (
    <HeaderElem>
      <BurgerContainer>
        <Burger/>
      </BurgerContainer>
    </HeaderElem>
  )
}
