import { FilterQuery } from 'mongoose';
import { type Product as ProductType } from '../models/Products.js';
import { ParsedQs } from 'qs';
import Category from '../models/Category.js';

type PathParams = {
  sex: string;
} & {
  category?: string | undefined;
};

const WHITELISTED_SEARCH_PARAMS = ['size', 'color', 'type'];

function mutateFiltersWithPrice(
  filters: FilterQuery<ProductType>,
  searchParams: ParsedQs
) {
  if (!searchParams || !filters) return;

  const { $and } = filters;

  if (
    searchParams.hasOwnProperty('priceStart') &&
    searchParams.hasOwnProperty('priceEnd')
  ) {
    $and?.push({
      price: {
        $gte: Number(searchParams.priceStart),
        $lte: Number(searchParams.priceEnd),
      },
    });
  } else if (searchParams.hasOwnProperty('priceStart')) {
    $and?.push({ price: { $gte: Number(searchParams.priceStart) } });
  } else if (searchParams.hasOwnProperty('priceEnd')) {
    $and?.push({ price: { $lte: Number(searchParams.priceEnd) } });
  }
}

export async function createFilters(
  pathParams: PathParams,
  searchParams: ParsedQs
): Promise<FilterQuery<ProductType>> {
  const { sex, category } = pathParams;

  const filters: FilterQuery<ProductType> = {
    $and: [{ sex: sex === 'his' ? 'male' : 'female' }],
  };

  const { $and } = filters;

  mutateFiltersWithPrice(filters, searchParams);

  if (category) {
    const categoryData = await Category.findOne({ name: category });

    if (!categoryData?.id) {
      throw new Error('Category not found.');
    }
    $and?.push({ category: categoryData?.id });
  }

  for (let key in searchParams) {
    if (
      searchParams.hasOwnProperty(key) &&
      WHITELISTED_SEARCH_PARAMS.includes(key)
    ) {
      $and?.push({ [key]: searchParams[key] });
    }
  }

  return filters;
}
