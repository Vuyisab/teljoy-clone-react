export type Filter = {
  category?: string;
  price: {
    start: number;
    end: number;
  };
  brand?: string;
};
