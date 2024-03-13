import { FilterQuery } from 'mongoose';
import { type Product as ProductType } from '../models/Product.js';
import { ParsedQs } from 'qs';
import Category from '../models/Category.js';
import Type from '../models/ProductType.js';
import Product from '../models/Product.js';
import util from 'util';

type PathParams = {
  sex: string;
} & {
  category?: string | undefined;
  type?: string | undefined;
};

const WHITELISTED_SEARCH_PARAMS = ['size', 'color'];

export async function createFilters(
  pathParams: PathParams,
  searchParams: ParsedQs
): Promise<FilterQuery<ProductType>> {
  const { sex, category, type } = pathParams;

  const filters: FilterQuery<ProductType> = {
    $and: [{ sex: sex === 'his' ? 'male' : 'female' }],
  };

  const { $and } = filters;

  if (category) {
    const categoryData = await Category.findOne({ name: category });

    if (!categoryData?.id) {
      throw new Error('Category not found.');
    }

    $and?.push({ category: categoryData?.id });

    const priceFilter = await mutateFiltersWithPrice(
      filters,
      searchParams,
      categoryData?.id
    );
    if (priceFilter) $and?.push(priceFilter);
  }
  if (type) {
    const typeData = await Type.findOne({ name: type });

    if (!typeData?.id) {
      throw new Error('Type not found.');
    }
    $and?.push({ type: typeData?.id });
  }

  for (let key in searchParams) {
    if (
      searchParams.hasOwnProperty(key) &&
      WHITELISTED_SEARCH_PARAMS.includes(key)
    ) {
      if (key === 'size') {
        const sizeKeys = searchParams[key]?.toString().split(',');
        console.log(searchParams[key]);

        if (sizeKeys) {
          for (const sizeKey of sizeKeys) {
            $and?.push({
              [`colors.sizes.${sizeKey}`]: {
                $exists: true,
              },
            });
          }
        }
      }
      if (key === 'color') {
        const values = searchParams[key]?.toString().split(',');
        console.log(values);

        $and?.push({ 'colors.color_name': { $in: values } });
      }
    }
  }
  console.log($and);

  return filters;
}

async function mutateFiltersWithPrice(
  filters: FilterQuery<ProductType>,
  searchParams: ParsedQs,
  category: string
) {
  if (searchParams && filters) {
    if (
      searchParams.hasOwnProperty('min') ||
      searchParams.hasOwnProperty('max')
    ) {
      const data = await Product.find({ category })
        .populate('category')
        .populate('type');

      return {
        $or: generatePriceFiltersFromSizes(data, searchParams, filters),
      };
    }
  } else {
    return;
  }
}

function generatePriceFiltersFromSizes(
  data: ProductType[],
  searchParams: ParsedQs,
  filters: FilterQuery<ProductType>
) {
  const { $and } = filters;
  const pricefilter: FilterQuery<ProductType>[] = [];
  data.forEach((product) => {
    product.colors?.forEach((color) => {
      Object.keys(color.sizes).forEach((size) => {
        if ($and) {
          pricefilter.push({
            [`colors.sizes.${size}.price`]: {
              ...(searchParams.hasOwnProperty('min') &&
                searchParams.hasOwnProperty('max') && {
                  $gte: Number(searchParams.min),
                  $lte: Number(searchParams.max),
                }),
              ...(searchParams.hasOwnProperty('min') && {
                $gte: Number(searchParams.min),
              }),
              ...(searchParams.hasOwnProperty('max') && {
                $lte: Number(searchParams.max),
              }),
            },
          });
        }
      });
    });
  });
  return pricefilter;
}
