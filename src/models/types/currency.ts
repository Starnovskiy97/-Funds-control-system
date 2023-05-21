export type TypeCurrencySingle = {
  valueToBill?: number;
  code: string;
  value: number;
};

export type TypeCurrency = {
  USD: TypeCurrencySingle;
  EUR: TypeCurrencySingle;
  RUB: TypeCurrencySingle;
};
