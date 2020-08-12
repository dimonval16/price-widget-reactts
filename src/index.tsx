import React, { FC, useState } from "react";
import styled from "styled-components";
import { TestAppProps, PriceModel } from "./indexInterfaces";
import PriceBlock from "./components/price_block/PriceBlock";
import Card from "./components/card/Card";
import Button from "./components/button/Button";

const TestApp: FC<TestAppProps> = ({ prices, onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState<PriceModel>(prices[0]);

  const changeSelectedOption = (item: PriceModel) => {
    setSelectedOption(item);
  };

  const handleSubmit = () => {
    onSubmit(selectedOption);
  };

  return (
    <AppWrap>
      <Card>
        <PriceBlock
          prices={prices}
          titleLeft={"Тип"}
          titleRight={"Ціна"}
          onSubmitSelectedOption={changeSelectedOption}
        />
        <Total>
          <TotalPrice>{selectedOption.price}</TotalPrice>
          <Button disabled={false} onClick={handleSubmit}>
            До кошика
          </Button>
        </Total>
      </Card>
    </AppWrap>
  );
};

const AppWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 2%;
`;

const Total = styled.div`
  margin-top: 20px;
  width: 100%;
  min-width: 235px;
  max-width: 280px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TotalPrice = styled.span`
  font-size: 24px;
  font-weight: 500;
`;

export default TestApp;
