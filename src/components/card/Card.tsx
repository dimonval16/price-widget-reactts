import React, { FC } from "react";
import styled from "styled-components";

const Card: FC = ({ children }) => {
  return <StyledWrap>{children}</StyledWrap>;
};

const StyledWrap = styled.div`
  width: 100%;
  min-width: max-content;
  height: max-content;
  min-height: 227px;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  padding: 20px 10%;
  transition: padding 0.2s ease-in-out;

  @media (max-width: 410px) {
    padding: 20px 5%;
  }
`;

export default Card;
