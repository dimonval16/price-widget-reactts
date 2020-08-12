import React, { SFC } from "react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

export const Primary: SFC<{}> = () => (
  <Button disabled={false} onClick={action("clicked")}>
    Button
  </Button>
);

export const Disabled: SFC<{}> = () => (
  <Button disabled={true} onClick={action("clicked")}>
    Button
  </Button>
);

export default {
  title: "Common/Button",
};
