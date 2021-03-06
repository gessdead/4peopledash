import {useState} from "react";
import styled from 'styled-components';
import {color} from "../../global/style-utils";

const DropDownContainer = styled.div`
  width: 194px;
`;

const DropDownHeader = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: ${color.black};
  padding: 13px 55px 14px 17px;
  border: 1px solid ${color.white};
  border-radius: 6px;
  cursor: pointer;
`;

const DropDownListContainer = styled.div`
  padding: 19px 6px 19px 0;
  box-shadow: 0 2px 2px rgba(12, 20, 39, .1);
  border-radius: 8px;
`;

const DropDownList = styled.ul`
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  list-style: none;
  height: 291px;
  
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    background-color: #E8EAF0;
    border-radius: 2.5px;
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    border-radius: 2.5px;
  }
  
  &::-webkit-scrollbar-thumb {
    height: 101px;
    border-radius: 2.5px;
    background-color: #8697A8;
  }
`;

const ListItem = styled.li`
  font-size: 14px;
  line-height: 17px;
  font-weight: normal;
  padding: 17px;
  cursor: pointer;
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
];

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
            { isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        {options.map(option => (
                            <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                {option}
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </DropDownContainer>
    )
}

export default Select;