import {useState} from "react";
import './Select.scss';

import styled from 'styled-components';

const DropDownContainer = styled('div')`
  width: 194px;
`;
const DropDownHeader = styled('div')`
  font-size: 14px;
  line-height: 17px;
  color: #0C1427;
  padding: 13px 55px 14px 17px;
  border: 1px solid #DEDFE2;
  border-radius: 6px;
`;
const DropDownListContainer = styled('div')``;
const DropDownList = styled('ul')`
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  list-style: none;
  height: 291px;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    background-color: #8697A8;
    border-radius: 2.5px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 2.5px;
    width: 5px;
    background-color: #E8EAF0;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2.5px;
  }
`;
const ListItem = styled('li')`
  font-size: 14px;
  line-height: 17px;
  font-weight: normal;
  padding: 17px;  
`;

const options = ['January, 2021',
    'February, 2021',
    'March, 2021',
    'April, 2021',
    'May, 2021',
    'June, 2021',
    'Jule, 2021',
    'August, 2021',
    'September, 2021',
    'October, 2021',
    'November, 2021',
    'December, 2021'
]


function Select() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = val => () => {
        setSelectedOption(val);
        setIsOpen(false);
    }

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>
                {selectedOption|| "January, 2021"}
            </DropDownHeader>
            <DropDownListContainer>
                {isOpen && (
                    <DropDownList>
                        {options.map(option => (
                            <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                {option}
                            </ListItem>
                        ))}
                    </DropDownList>
                )}
            </DropDownListContainer>
        </DropDownContainer>
    )
}

export default Select;