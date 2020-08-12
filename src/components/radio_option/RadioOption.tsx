import React, { FC } from "react";
import styled from "styled-components";
import {
  RadipOptionProps,
  StyledCustomInput,
  StyledLabel,
} from "./RadioOptionInterfaces";

const RadioOption: FC<RadipOptionProps> = ({
  item,
  currentOption,
  onOptionChange,
}) => {
  const isActiveOption: boolean = currentOption.id === item.id;

  const handleClick: () => void = () => {
    onOptionChange(item);
  };

  return (
    <Label checked={isActiveOption} onClick={handleClick}>
      <Input type="radio" name="weight" value={item.weight} />
      <ItemLeft>{item.weight}</ItemLeft>
      <ItemRight>{item.price}</ItemRight>
      <CustomInput checked={isActiveOption} />
    </Label>
  );
};

const Label = styled.label<StyledLabel>`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-left: 40px;
  margin-bottom: 15px;
  cursor: pointer;
  color: ${({ checked }) => (checked ? "#000" : "#999999")};
  font-weight: ${({ checked }) => (checked ? "500" : "400")};
`;

const Input = styled.input`
  display: none;
`;

const CustomInput = styled.span<StyledCustomInput>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${({ checked }) => (checked ? "#6CA22C" : "#999999")};
  display: block;
  position: absolute;
  left: 0;
  top: 0;

  &:after {
    content: "";
    width: 8px;
    height: 8px;
    background: #6ca22c;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
      scale(${({ checked }) => (checked ? "1" : "0")});
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
  }
`;

const ItemLeft = styled.span`
  margin-right: 5px;
`;

const ItemRight = styled.span`
  margin-left: 5px;
`;

export default RadioOption;
