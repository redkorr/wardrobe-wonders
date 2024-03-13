import { Product } from '../models/Product.js';

type Filters = {
  colors: string[];
  sizes: string[];
  prices: {
    min: number;
    max: number;
  };
};

export const createFiltersFromProducts = (filteredData: Array<Product>) => {
  const filters: Filters = {
    colors: [],
    sizes: [],
    prices: {
      min: 0,
      max: 0,
    },
  };

  let colors: string[] = [];
  let sizes: string[] = [];
  let prices: number[] = [];

  filteredData.forEach((item) => {
    item.colors?.forEach((color) => {
      const itemSizes = color.sizes;
      const itemSizesKeys = Object.keys(color.sizes);

      if (!colors.includes(color.color_name)) {
        colors = [...colors, color.color_name];
      }

      itemSizesKeys.forEach((size) => {
        const price = itemSizes[size].price;
        if (!sizes.includes(size)) {
          sizes = [...sizes, size];
        }

        if (!prices.includes(price)) {
          prices = [...prices, price];
        }
      });
    });
  });

  filters.sizes = sizes;
  filters.prices = {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
  filters.colors = colors;

  return filters;
};
