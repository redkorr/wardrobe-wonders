import { Router } from 'express';
import Product, { type Product as ProductType } from '../../models/Product.js';
import { type Category as CategoryType } from '../../models/Category.js';
import { MongooseError } from 'mongoose';
import { createFiltersFromProducts } from '../../lib/filtersFromProducts.js';

const router = Router();

router.get('/:sex?/:category?', async (req, res) => {
  let sex = '';
  if (req.params.sex === 'his') {
    sex = 'male';
  } else if (req.params.sex === 'her') {
    sex = 'female';
  }

  try {
    let filters;
    if (req.params.category) {
      const data: Array<ProductType> = await Product.find({
        sex: sex,
      }).populate('category');
      const filteredData = data.filter(
        (product) =>
          (product.category as unknown as CategoryType).name ===
          req.params.category
      );

      filters = createFiltersFromProducts(filteredData);
    } else {
      const data: Array<ProductType> = await Product.find({
        sex: sex,
      }).populate('category');
      filters = createFiltersFromProducts(data);
    }

    res.status(200).json(filters);
  } catch (error) {
    if (error instanceof MongooseError) {
      res.status(500).json(error);
    }
  }
});

export default router;
