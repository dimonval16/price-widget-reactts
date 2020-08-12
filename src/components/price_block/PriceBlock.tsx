import React, { FC, useState } from "react";
import styled from "styled-components";
import { PriceBlockProps, PriceModel } from "./PriceBlockInterfaces";
import RadioOption from "../radio_option/RadioOption";

const PriceBlock: FC<PriceBlockProps> = ({
  prices,
  titleLeft,
  titleRight,
  onSubmitSelectedOption,
}) => {
  const [currentOption, setCurrentOption] = useState<PriceModel>(prices[0]);

  const chooseOption: (item: PriceModel) => void = (item) => {
    setCurrentOption(item);
    onSubmitSelectedOption(item);
  };

  return (
    <MainWrap>
      <TitleWrap>
        <Title>{titleLeft}</Title>
        <Title>{titleRight}</Title>
      </TitleWrap>
      <RadioGroup>
        {prices.map((item) => (
          <RadioOption
            key={item.id}
            item={item}
            currentOption={currentOption}
            onOptionChange={chooseOption}
          />
        ))}
      </RadioGroup>
    </MainWrap>
  );
};

const MainWrap = styled.div``;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 18px;
  line-height: 21px;
  font-weight: 500;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export default PriceBlock;
