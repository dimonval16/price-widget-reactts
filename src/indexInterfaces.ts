export interface PriceModel {
  weight: string;
  price: string;
  id: string;
}

export interface TestAppProps {
  prices: PriceModel[];
  onSubmit: (selectedOption: PriceModel) => void;
}
