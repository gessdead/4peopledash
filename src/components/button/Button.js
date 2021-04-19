import './Button.scss'
import styled from 'styled-components';

const Btn = styled('button')`
  color: #058373;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  padding: 9px 18px;
  background-color: rgba(#058373, .1)`

export default function Button() {
    return (
        <Btn>Sign out</Btn>
    )

}