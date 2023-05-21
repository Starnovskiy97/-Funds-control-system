import TypeRecord from '@/models/types/record';
import { makeAutoObservable } from 'mobx';

export class Records {
  constructor() {
    makeAutoObservable(this);
  }

  allRecords: TypeRecord[] = [];

  addRecord = (record: TypeRecord) => {
    this.allRecords.push(record);
  };

  getRecord = (id: number) => {
    return this.allRecords.find((record) => record.id === id);
  };
}
