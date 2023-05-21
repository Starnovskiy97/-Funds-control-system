export type TypeCategory = {
  id: number;
  title?: string;
  limit: number;
  category?: number;
};

export type TypeEditLimit = {
  categoryId: number;
  limit: number;
  type: string;
};
