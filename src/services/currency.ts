import { TypeCurrency } from '@/models/types/currency';
import axios from 'axios';

type TypeApi = {
  data: TypeCurrency;
  meta: {
    last_updated_at: string;
  };
};

export const currencyService = {
  async getCurrency() {
    try {
      const key = import.meta.env.VITE_CURRENCY_API_KEY;

      const { data } = await axios.get<TypeApi>(
        `https://api.currencyapi.com/v3/latest?apikey=${key}&currencies=EUR%2CUSD%2CRUB`
      );

      return data.data;
    } catch (e) {
      console.log(e);
    }
  }
};
