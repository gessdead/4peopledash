import styled from 'styled-components';
import {color} from '../../global/style-utils';

const Btn = styled('button')`
  color: ${color.green};
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  padding: 9px 18px;
  background-color: ${color.green_01}`

export default function Button() {
    return (
        <Btn>Sign out</Btn>
    )
}