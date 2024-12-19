import { Product } from '../models/Product.js';

type Filters = {
  colors: Color[];
  sizes: string[];
  prices: {
    min: number;
    max: number;
  };
};

type Color = {
  colorName: string;
  colorHex: string;
};

export const createFiltersFromProducts = (filteredData: Array<Product>) => {
  const filters: Filters = {
    colors: [
      {
        colorName: '',
        colorHex: '',
      },
    ],
    sizes: [],
    prices: {
      min: 0,
      max: 0,
    },
  };

  let colors: Color[] = [];
  let sizes: string[] = [];
  let prices: number[] = [];

  filteredData.forEach((item) => {
    item.colors?.forEach((color) => {
      const itemSizes = color.sizes;
      const itemSizesKeys = Object.keys(color.sizes);
      if (
        !colors.some(
          (filterColor) => filterColor.colorName === color.color_name
        )
      ) {
        colors = [
          ...colors,
          { colorName: color.color_name, colorHex: color.color },
        ];
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
