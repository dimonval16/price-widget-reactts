import React, { SFC } from "react";
import PriceBlock from "./PriceBlock";
import { action } from "@storybook/addon-actions";
import { PriceModel } from "./PriceBlockInterfaces";

const prices: PriceModel[] = [
  { weight: "item 1", price: "price 1", id: "1" },
  { weight: "item 2", price: "price 2", id: "2" },
  { weight: "item 3", price: "price 3", id: "3" },
];

export const Primary: SFC<{}> = () => (
  <PriceBlock
    prices={prices}
    titleLeft={"Title1"}
    titleRight={"Title2"}
    onSubmitSelectedOption={action("option-submitted")}
  />
);

export default {
  title: "Common/PriceBlock",
};
