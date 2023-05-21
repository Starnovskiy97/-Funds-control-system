import { TypeCategory } from './category';

type TypeRecord = {
  id: number;
  summa: number;
  type: string;
  description: string;
  category: TypeCategory | undefined;
  date: string;
};

export default TypeRecord;
