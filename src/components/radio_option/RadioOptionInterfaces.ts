interface PriceModel {
  weight: string;
  price: string;
  id: string;
}

export interface RadipOptionProps {
  item: PriceModel;
  currentOption: PriceModel;
  onOptionChange: (item: PriceModel) => void;
}

export interface StyledCustomInput {
  checked: boolean;
}

export interface StyledLabel {
  checked: boolean;
}
