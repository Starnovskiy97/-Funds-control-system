import { TypeUser } from '@/models/types/user';
import { currencyService } from '@/services/currency';
import { makeAutoObservable } from 'mobx';

export class Users {
  constructor() {
    makeAutoObservable(this);
  }

  currentUser: TypeUser | null = null;

  setUser = (data: TypeUser) => {
    this.currentUser = data;
  };

  editName = (data: string) => {
    if (this.currentUser) {
      this.currentUser.name = data;
    }
  };

  billToCurrency = async () => {
    const data = await currencyService.getCurrency();

    const [RUB] = Object.values(data!)
      .map((val) => {
        if (val.code === 'RUB') return val.value;
      })
      .filter(Boolean);

    return Object.values(data!).map((val) => {
      if (val.code === 'EUR') {
        val.valueToBill = Number(
          (this.currentUser!.bill / (RUB! / val.value)).toFixed(2)
        );
        val.value = Number((RUB! / val.value).toFixed(2));
      }
      if (val.code === 'USD') {
        val.valueToBill = Number((this.currentUser!.bill / RUB!).toFixed(2));
        val.value = Number(RUB!.toFixed(2));
      }
      if (val.code === 'RUB') {
        val.valueToBill = Number(this.currentUser!.bill.toFixed(2));
        val.value = 1;
      }

      return val;
    });
  };
}
