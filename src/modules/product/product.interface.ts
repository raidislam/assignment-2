export type Tvariants = {
  type: string;
  value: string;
};

export type TInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProduct = {
  name: String;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: [Tvariants];
  inventory: TInventory;
};
