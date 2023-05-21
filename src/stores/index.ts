import { Categories } from './categories';
import { Records } from './records';
import { Users } from './users';

export const store = {
  categories: new Categories(),
  records: new Records(),
  users: new Users()
};
