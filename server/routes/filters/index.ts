import { Router } from 'express';
import Product, { type Product as ProductType } from '../../models/Product.js';
import { type Category as CategoryType } from '../../models/Category.js';
import { MongooseError } from 'mongoose';
import { createFiltersFromProducts } from '../../lib/filtersFromProducts.js';

const router = Router();

router.get('/:category?', async (req, res) => {
  try {
    let filters;
    if (req.params.category) {
      const data: Array<ProductType> = await Product.find().populate(
        'category'
      );
      const filteredData = data.filter(
        (product) =>
          (product.category as unknown as CategoryType).name ===
          req.params.category
      );

      filters = createFiltersFromProducts(filteredData);
    } else {
      const data: Array<ProductType> = await Product.find().populate(
        'category'
      );
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
