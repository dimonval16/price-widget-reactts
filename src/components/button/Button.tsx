import React, { FC } from "react";
import styled from "styled-components";
import { ButtonProps, StyledButtonProps } from "./ButtonInterfaces";

const Button: FC<ButtonProps> = ({ disabled, onClick, children }) => {
  const handleClick = () => {
    if (!disabled) onClick();
  };

  return (
    <StyledButton
      bgColor={disabled ? "#B2B2B2" : "#6CA22C"}
      onClick={handleClick}
      disabled={disabled}
    >
      <Icon />
      <Text>{children}</Text>
    </StyledButton>
  );
};

const Icon = styled.div`
  background-image: url("supermarket.svg");
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Text = styled.span`
  color: white;
  font-weight: bold;
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
`;

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 137px;
  height: 48px;
  border-radius: 8px;
  border: none;
  background-color: ${({ bgColor }) => bgColor};
  outline: none;
  cursor: pointer;

  &:active {
    opacity: ${({ disabled }) => (disabled ? "1" : "0.7")};
  }
`;

export default Button;
