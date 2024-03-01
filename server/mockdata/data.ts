import { type Product } from '../models/Product.js';
import { Types } from 'mongoose';

export const data: Array<Product> = [
  {
    sex: 'male',
    name: "Men's cotton patterned t-shirt with elastane blend color green",
    sizes: {
      S: { stock: 10, price: 49.9 },
      M: { stock: 2, price: 49.9 },
      L: { stock: 5, price: 49.9 },
      XL: { stock: 10, price: 49.9 },
      XXL: { stock: 12, price: 49.9 },
    },
    currency: 'PLN',
    category: new Types.ObjectId('653ac6324034fcd15891180c'), // cloth
    type: new Types.ObjectId('653a64ff0de8e3dc995d7693'),
    images: [
      '/RW23-TSM060-67A_F1.webp',
      '/RW23-TSM060-67A_F3.webp',
      '/RW23-TSM060-67A_F4.webp',
    ],
    description: {
      body: 'T-shirt from the special collection of Medicine - Pop Icons. Model made of cotton knit fabric. - Regular cut. - Round neckline. - Short sleeve. - Model with a print. - Width under the arms: 57.2 cm. - Length: 74 cm. - Dimensions given for size: L.',
      fabric_main: ['95% Cotton', '5% Elastane'],
    },
    color: 'Green',
  },
  {
    sex: 'male',
    name: "Mad Max men's cotton t-shirt black color",
    sizes: {
      S: { stock: 10, price: 94.9 },
      M: { stock: 2, price: 99.9 },
      L: { stock: 5, price: 99.9 },
      XL: { stock: 10, price: 99.9 },
      XXL: { stock: 12, price: 104.9 },
      XXXL: { stock: 12, price: 104.9 },
    },
    currency: 'PLN',
    category: new Types.ObjectId('653ac6324034fcd15891180c'), // cloth
    type: new Types.ObjectId('653a64ff0de8e3dc995d7693'),
    images: [
      '/RW23-TSM962-99X_F1.webp',
      '/RW23-TSM962-99X_F3.webp',
      '/RW23-TSM962-99X_F6.webp',
    ],
    description: {
      body: 'T-shirt from the special collection of Medicine - Pop Icons. Model made of cotton knit fabric. - Regular cut. - Round neckline. - Short sleeve. - Model with a print. - Width under the arms: 57.2 cm. - Length: 74 cm. - Dimensions given for size: L.',
      fabric_main: ['100 % Bawełna'],
    },
    color: 'Black',
  },
  {
    sex: 'male',
    name: "Men's hooded sweatshirt color black",
    sizes: {
      S: { stock: 1, price: 174.9 },
      M: { stock: 2, price: 179.9 },
      L: { stock: 5, price: 179.9 },
      XL: { stock: 10, price: 179.9 },
      XXL: { stock: 2, price: 189.9 },
    },
    currency: 'PLN',
    category: new Types.ObjectId('653ac6324034fcd15891180c'), // cloth
    type: new Types.ObjectId('653a64ff0de8e3dc995d7691'),
    images: [
      '/RW23-BLMA30-99X_F1.webp',
      '/RW23-BLMA30-99X_F3.webp',
      '/RW23-BLMA30-99X_F5.webp',
    ],
    description: {
      body: 'Hooded sweatshirt from the Medicine collection. Model made of knitted with a print. - Regular cut. - Long sleeve. - Lowered shoulder line. - Model with a hood.  -Pocket on the front. - Welt finish. - Printed model. - Sleeve length(measured from the hood): 80 cm. - Length on the front: - 75 cm. - Length at the back: - 73 cm.  -Width under the arms: 62 cm. - Dimensions given for size: L.',
      fabric_main: ['70% Cotton', '30% Polyester'],
      fabric_other: ['98% Cotton', '2% Elastane'],
    },
    color: 'Black',
  },
  {
    sex: 'male',
    name: "Men's hooded sweatshirt color beige",
    sizes: {
      S: { stock: 10, price: 189.9 },
      M: { stock: 2, price: 199.9 },
      L: { stock: 5, price: 199.9 },
      XL: { stock: 10, price: 204.9 },
      XXL: { stock: 12, price: 204.9 },
    },
    currency: 'PLN',
    category: new Types.ObjectId('653ac6324034fcd15891180c'), // cloth
    type: new Types.ObjectId('653a64ff0de8e3dc995d7691'),
    images: [
      '/RW23-BLM802-80M_F1.webp',
      '/RW23-BLM802-80M_F3.webp',
      '/RW23-BLM802-80M_F5.webp',
    ],
    description: {
      body: 'Hooded sweatshirt from the Medicine collection. Zippered model made of printed knit. - Regular cut. - Long sleeve. - Zipper closure. - Drawstring hood. - Welt trim. - Printed model. - Sleeve length: 67 cm. - Length at the front: 74 cm. - Length at back: 72.5 cm. - Width under the arms: 60 cm. - Dimensions given for size: L.',
      fabric_main: ['70% Cotton', '30% Polyester'],
      fabric_other: ['98% Cotton', '2% Elastane'],
    },
    color: 'Beige',
  },
  {
    sex: 'male',
    name: "Men's hooded sweatshirt color black",
    sizes: {
      S: { stock: 10, price: 174.9 },
      M: { stock: 2, price: 179.9 },
      L: { stock: 5, price: 179.9 },
      XL: { stock: 6, price: 179.9 },
      XXL: { stock: 6, price: 189.9 },
    },
    currency: 'PLN',
    category: new Types.ObjectId('653ac6324034fcd15891180c'), // cloth
    type: new Types.ObjectId('653a64ff0de8e3dc995d7691'),
    images: [
      '/RW23-BLMA31-99X_F1.webp',
      '/RW23-BLMA31-99X_F3.webp',
      '/RW23-BLMA31-99X_F5.webp',
    ],
    description: {
      body: 'Hooded sweatshirt from the Medicine collection. Model made of knitted fabric with a print. - Regular cut. - Long sleeve. - Lowered shoulder line. - Drawstring hood. - Slip-in pockets. - Welt trim. - Printed model. - Sleeve length(measured from the hood): 80 cm. - Length: 74 cm. - Width under the arms: 62 cm. - Dimensions given for size: L.',
      fabric_main: ['70% Cotton', '30% Polyester'],
      fabric_other: ['98% Cotton', '2% Elastane'],
    },
    color: 'Black',
  },
  {
    sex: 'male',
    name: "Men's slim color jeans",
    sizes: {
      S: { stock: 10, price: 154.9 },
      M: { stock: 7, price: 159.9 },
      L: { stock: 5, price: 159.9 },
      XL: { stock: 10, price: 164.9 },
      XXL: { stock: 12, price: 169.9 },
    },
    currency: 'PLN',
    category: new Types.ObjectId('653ac6324034fcd15891180c'), // cloth
    type: new Types.ObjectId('653a64ff0de8e3dc995d7694'),
    images: [
      '/RW23-SJM903-RDJ_F1.webp',
      '/RW23-SJM903-RDJ_F2.webp',
      '/RW23-SJM903-RDJ_F3.webp',
    ],
    description: {
      body: 'Jeans from the Medicine collection in slim cut with a regular waist. Model made of washed denim. Slim fit jeans with a narrow leg, both in the thigh and ankle area. They emphasize the natural line of the silhouette, but do not hug it, they are comfortable for everyday use. - Regular waist. Slip-on pockets. - Decoratively washed denim. - Width at waist: 43.4 cm. - Width at hips: 51.4 cm. - Waist height: 26.2 cm. - Bottom leg width: 16.9 cm. - Inner leg length: 82 cm. - Dimensions given for size: 32.',
      fabric_main: ['88% Cotton', '11% Polyester', '1% Elastane'],
      fabric_other: ['100% Cotton'],
    },
    color: 'Black',
  },
  {
    sex: 'male',
    name: "Men's slim jeans navy blue color",
    sizes: {
      S: { stock: 10, price: 154.9 },
      M: { stock: 10, price: 159.9 },
      L: { stock: 4, price: 159.9 },
      XL: { stock: 11, price: 164.9 },
      XXL: { stock: 12, price: 169.9 },
    },
    currency: 'PLN',
    category: new Types.ObjectId('653ac6324034fcd15891180c'), // cloth
    type: new Types.ObjectId('653a64ff0de8e3dc995d7694'),
    images: [
      '/RW23-SJM903-59J_F1.webp',
      '/RW23-SJM903-59J_F3.webp',
      '/RW23-SJM903-59J_F4.webp',
    ],
    description: {
      body: 'Jeans from the Medicine collection in slim cut with a regular waist. Model made of washed denim. Slim fit jeans with a narrow leg, both in the thigh and ankle area. They emphasize the natural line of the silhouette, but do not hug it, they are comfortable for everyday use. - Regular waist. - Slip-on pockets. - Decoratively washed denim. - Width at waist: 43.4 cm. - Width at hips: 51.4 cm. - Waist height: 26.2 cm. - Bottom leg width: 16.9 cm. - Inner leg length: 82 cm. - Dimensions given for size: 32.',
      fabric_main: ['88% Cotton', '11% Polyester', '1% Elastane'],
      fabric_other: ['100% Cotton'],
    },
    color: 'Navy blue',
  },
  {
    sex: 'male',
    name: "Men's jeans regular color blue",
    sizes: {
      S: { stock: 11, price: 154.9 },
      M: { stock: 3, price: 159.9 },
      L: { stock: 5, price: 159.9 },
      XL: { stock: 8, price: 164.9 },
      XXL: { stock: 12, price: 169.9 },
    },
    currency: 'PLN',
    category: new Types.ObjectId('653ac6324034fcd15891180c'),
    type: new Types.ObjectId('653a64ff0de8e3dc995d7694'),
    images: [
      '/RW23-SJM902-55J_F1.webp',
      '/RW23-SJM902-55J_F3.webp',
      '/RW23-SJM902-55J_F4.webp',
    ],
    description: {
      body: 'Jeans from the Medicine collection in regular cut with a regular waist. Model made of washed denim. Regular cut jeans with a classic cut with a straight leg along the entire length and a regular waist. Wider, but still straight leg, provides freedom of movement and comfort of wearing. Universal, and at the same time slightly looser cut of jeans makes them fit any type of figure. - Slip-on pockets. - Decoratively washed denim. - Width at waist: 41.7 cm. - Width at hips: 52.5 cm. Waist height: 25.7 cm. - Leg width at bottom: 19.5 cm. - Inner leg length: 80 cm. - Dimensions given for size: 31.',
      fabric_main: ['74% Cotton', '24% Polyester', '1% Elastane'],
      fabric_other: ['100% Cotton'],
    },
    color: 'Blue',
  },
  {
    sex: 'male',
    name: "Men's wool blend patterned shirt multicolor color",
    sizes: {
      S: { stock: 10, price: 174.9 },
      M: { stock: 2, price: 179.9 },
      L: { stock: 5, price: 179.9 },
      XL: { stock: 10, price: 179.9 },
      XXL: { stock: 12, price: 189.9 },
    },
    currency: 'PLN',
    category: new Types.ObjectId('653ac6324034fcd15891180c'), // cloth
    type: new Types.ObjectId('653a64ff0de8e3dc995d7692'),
    images: [
      '/RW23-KDM901-MLA_F1.webp',
      '/RW23-KDM901-MLA_F2.webp',
      '/RW23-KDM901-MLA_F4.webp',
    ],
    description: {
      body: 'Shirt from the collection of Medicine. The model is made of fabric with a blend of wool. It has a classic, padded collar. Oversize cut. Classic, stiffened kent collar. - Lowered shoulder line. - Buttoned cuffs. - Pockets on the chest. Button closure. - Patterned fabric. - Collar circumference: 47.5 cm. - Sleeve length(measured from the collar): 81.9 cm. - Length in front: 79.5 cm. - Length at back: 78.5 cm. - Width under the arms: 63 cm. - Dimensions given for size: L.',
      fabric_main: ['85% Polyester', '10% Wool', '5% Other material'],
      fabric_other: ['100% Cotton'],
    },
    color: 'Multicolor',
  },
  {
    sex: 'male',
    name: "Men's shirt with classic collar plain white color",
    sizes: {
      S: { stock: 10, price: 154.9 },
      M: { stock: 2, price: 159.9 },
      L: { stock: 5, price: 159.9 },
      XL: { stock: 10, price: 164.9 },
      XXL: { stock: 12, price: 169.9 },
    },
    currency: 'PLN',
    category: new Types.ObjectId('653ac6324034fcd15891180c'), // cloth
    type: new Types.ObjectId('653a64ff0de8e3dc995d7692'),
    images: [
      '/RW23-KDM090-00X_F1.webp',
      '/RW23-KDM090-00X_F3.webp',
      '/RW23-KDM090-00X_F5.webp',
    ],
    description: {
      body: 'Shirt from the collection of Medicine. Model made of smooth fabric. It has a classic collar. - Slim fit cut. - Long sleeve. - Buttoned cuffs. - Stiffened classic collar, kent type. - Button closure. - Smooth fabric. - Collar circumference: 42 cm. - Sleeve length: 67 cm. - Length in front: 76 cm. - Length at back: 75 cm. - Width under the arms: 52.5 cm. - Dimensions given for size: M.',
      fabric_main: ['98% Cotton', '2% Elastane'],
      fabric_other: ['100% Polyester'],
    },
    color: 'White',
  },
  {
    sex: 'male',
    name: "Men's suede shoes brown color",
    sizes: {
      '39': { stock: 10, price: 299.9 },
      '40': { stock: 0, price: 299.9 },
      '41': { stock: 5, price: 299.9 },
      '42': { stock: 10, price: 299.9 },
      '43': { stock: 12, price: 299.9 },
    },
    currency: 'PLN',
    category: new Types.ObjectId('653ac6324034fcd15891180d'), // shoes,
    type: new Types.ObjectId('653a64ff0de8e3dc995d7695'),
    images: [
      '/RW23-OBM406-89X_F1.webp',
      '/RW23-OBM406-89X_F2.webp',
      '/RW23-OBM406-89X_F4.webp',
    ],
    description: {
      body: 'Shoes from the collection of Medicine. Model made of suede leather. - Round, stiffened nose. - Stiffened heel counter. - Rubber sole. - Lace-up model. - Elevated upper. - Comfortable interior. - The length of the insole is: 28 cm. - Dimensions given for size: 42.',
      fabric_main: ['100% Natural leather'],
      fabric_other: ['100% TPR'],
      fabric_inside: ['60% Natural leather', '40% Polyester'],
    },
    color: 'Brown',
  },
  {
    sex: 'male',
    name: "Men's suede sneakers yellow color",
    sizes: {
      '39': { stock: 0, price: 329.9 },
      '40': { stock: 0, price: 329.9 },
      '41': { stock: 7, price: 329.9 },
      '42': { stock: 20, price: 329.9 },
      '43': { stock: 10, price: 329.9 },
      '44': { stock: 20, price: 329.9 },
    },
    currency: 'PLN',
    category: new Types.ObjectId('653ac6324034fcd15891180d'), // shoes,
    type: new Types.ObjectId('653a64ff0de8e3dc995d7695'),
    images: [
      '/RW23-OBM204-17X_F1.webp',
      '/RW23-OBM204-17X_F2.webp',
      '/RW23-OBM204-17X_F5.webp',
    ],
    description: {
      body: 'Sneakers from the collection of Medicine. Model made of suede leather. - Round, stiffened nose. - Elevated upper. - Rubber sole. - Stiffened heel counter. - Textile interior. - Lace-up model. - The length of the insole is: 29 cm. - Dimensions given for size: 43.',
      fabric_main: ['100% Suede leather'],
      fabric_other: ['100% TPR'],
      fabric_inside: ['100% Polyester'],
    },
    color: 'string',
  },
];
