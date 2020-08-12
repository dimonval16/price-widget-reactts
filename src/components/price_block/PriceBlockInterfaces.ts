export interface PriceModel {
  weight: string;
  price: string;
  id: string;
}

export interface PriceBlockProps {
  prices: PriceModel[];
  titleLeft: string;
  titleRight: string;
  onSubmitSelectedOption: (item: PriceModel) => void;
}
