import { ERecordType } from '@/models/enums/ERecordType';
import { TypeCategory, TypeEditLimit } from '@/models/types/category';
import { makeAutoObservable } from 'mobx';

export class Categories {
  constructor() {
    makeAutoObservable(this);
  }

  allCategories: TypeCategory[] = [];

  addCategory = (category: TypeCategory) => {
    this.allCategories.push(category);
  };

  removeCategory = (id: number) => {
    this.allCategories = this.allCategories.filter(
      (category) => category.id !== id
    );
  };

  editCategory = (data: TypeCategory) => {
    this.allCategories = this.allCategories.map((category) => {
      if (category.id === data.id) {
        return { ...category, limit: data.limit };
      }

      return category;
    });
  };

  editLimit = (data: TypeEditLimit) => {
    this.allCategories = this.allCategories.map((category) => {
      if (category.id === data.categoryId) {
        return data.type === ERecordType.income
          ? { ...category, limit: category.limit + data.limit }
          : { ...category, limit: category.limit - data.limit };
      }

      return category;
    });
  };

  getCategory = (id: number) => {
    return this.allCategories.find((category) => category.id === id);
  };
}
