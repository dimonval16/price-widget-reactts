import React, { SFC } from "react";
import TestApp from "./";
import { action } from "@storybook/addon-actions";
import { PriceModel } from "./indexInterfaces";

const Regular: SFC = () => {
  const prices: PriceModel[] = [
    { weight: "500 г", price: "500 грн", id: "1" },
    { weight: "100 г", price: "150 грн", id: "2" },
    { weight: "50 г", price: "90 грн", id: "3" },
  ];

  return <TestApp prices={prices} onSubmit={action("option-submitted")} />;
};

export { Regular };

export default {
  title: "Common/TestApp",
};
