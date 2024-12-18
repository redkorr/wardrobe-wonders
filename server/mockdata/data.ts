import { type Product } from '../models/Product.js';
import { Types } from 'mongoose';

export const data: Array<Product> = [
  {
    sex: 'male',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f18'), // cloth
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40014'),

    colors: [
      {
        name: "Men's cotton patterned t-shirt with elastane blend color green",
        color_name: 'Green',
        color: '#008000',
        sizes: {
          S: { stock: 10, price: 49.9 },
          M: { stock: 2, price: 49.9 },
          L: { stock: 5, price: 49.9 },
          XL: { stock: 10, price: 49.9 },
          XXL: { stock: 12, price: 49.9 },
        },
        images: [
          '/RW23-TSM060-67A_F1.webp',
          '/RW23-TSM060-67A_F3.webp',
          '/RW23-TSM060-67A_F4.webp',
        ],
      },
    ],
    description: {
      body: 'T-shirt from the special collection of Medicine - Pop Icons. Model made of cotton knit fabric. - Regular cut. - Round neckline. - Short sleeve. - Model with a print. - Width under the arms: 57.2 cm. - Length: 74 cm. - Dimensions given for size: L.',
      fabric_main: ['95% Cotton', '5% Elastane'],
    },
  },
  {
    sex: 'male',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f18'), // cloth
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40014'),
    colors: [
      {
        name: "Mad Max men's cotton t-shirt black color",
        color_name: 'Black',
        color: '#000000',
        sizes: {
          S: { stock: 10, price: 94.9 },
          M: { stock: 2, price: 99.9 },
          L: { stock: 5, price: 99.9 },
          XL: { stock: 10, price: 99.9 },
          XXL: { stock: 12, price: 104.9 },
          XXXL: { stock: 12, price: 104.9 },
        },
        images: [
          '/RW23-TSM962-99X_F1.webp',
          '/RW23-TSM962-99X_F3.webp',
          '/RW23-TSM962-99X_F6.webp',
        ],
      },
    ],
    description: {
      body: 'T-shirt from the special collection of Medicine - Pop Icons. Model made of cotton knit fabric. - Regular cut. - Round neckline. - Short sleeve. - Model with a print. - Width under the arms: 57.2 cm. - Length: 74 cm. - Dimensions given for size: L.',
      fabric_main: ['100 % Bawełna'],
    },
  },
  {
    sex: 'male',

    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f18'), // cloth
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40012'),

    colors: [
      {
        name: "Men's hooded sweatshirt color black",
        color_name: 'Black',
        color: '#000000',
        sizes: {
          S: { stock: 1, price: 174.9 },
          M: { stock: 2, price: 179.9 },
          L: { stock: 5, price: 179.9 },
          XL: { stock: 10, price: 179.9 },
          XXL: { stock: 2, price: 189.9 },
        },
        images: [
          '/RW23-BLMA30-99X_F1.webp',
          '/RW23-BLMA30-99X_F3.webp',
          '/RW23-BLMA30-99X_F5.webp',
        ],
      },
    ],
    description: {
      body: 'Hooded sweatshirt from the Medicine collection. Model made of knitted with a print. - Regular cut. - Long sleeve. - Lowered shoulder line. - Model with a hood.  -Pocket on the front. - Welt finish. - Printed model. - Sleeve length(measured from the hood): 80 cm. - Length on the front: - 75 cm. - Length at the back: - 73 cm.  -Width under the arms: 62 cm. - Dimensions given for size: L.',
      fabric_main: ['70% Cotton', '30% Polyester'],
      fabric_other: ['98% Cotton', '2% Elastane'],
    },
  },
  {
    sex: 'male',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f18'), // cloth
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40012'),
    colors: [
      {
        name: "Men's hooded sweatshirt color beige",
        color_name: 'Beige',
        color: '#8f6d42',
        sizes: {
          S: { stock: 10, price: 189.9 },
          M: { stock: 2, price: 199.9 },
          L: { stock: 5, price: 199.9 },
          XL: { stock: 10, price: 204.9 },
          XXL: { stock: 12, price: 204.9 },
        },
        images: [
          '/RW23-BLM802-80M_F1.webp',
          '/RW23-BLM802-80M_F3.webp',
          '/RW23-BLM802-80M_F5.webp',
        ],
      },
    ],
    description: {
      body: 'Hooded sweatshirt from the Medicine collection. Zippered model made of printed knit. - Regular cut. - Long sleeve. - Zipper closure. - Drawstring hood. - Welt trim. - Printed model. - Sleeve length: 67 cm. - Length at the front: 74 cm. - Length at back: 72.5 cm. - Width under the arms: 60 cm. - Dimensions given for size: L.',
      fabric_main: ['70% Cotton', '30% Polyester'],
      fabric_other: ['98% Cotton', '2% Elastane'],
    },
  },
  {
    sex: 'male',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f18'), // cloth
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40012'),

    colors: [
      {
        name: "Men's hooded sweatshirt color black",
        color_name: 'Black',
        color: '#000000',
        sizes: {
          S: { stock: 10, price: 174.9 },
          M: { stock: 2, price: 179.9 },
          L: { stock: 5, price: 179.9 },
          XL: { stock: 6, price: 179.9 },
          XXL: { stock: 6, price: 189.9 },
        },
        images: [
          '/RW23-BLMA31-99X_F1.webp',
          '/RW23-BLMA31-99X_F3.webp',
          '/RW23-BLMA31-99X_F5.webp',
        ],
      },
    ],
    description: {
      body: 'Hooded sweatshirt from the Medicine collection. Model made of knitted fabric with a print. - Regular cut. - Long sleeve. - Lowered shoulder line. - Drawstring hood. - Slip-in pockets. - Welt trim. - Printed model. - Sleeve length(measured from the hood): 80 cm. - Length: 74 cm. - Width under the arms: 62 cm. - Dimensions given for size: L.',
      fabric_main: ['70% Cotton', '30% Polyester'],
      fabric_other: ['98% Cotton', '2% Elastane'],
    },
  },
  {
    sex: 'male',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f18'), // cloth
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40015'),
    colors: [
      {
        name: "Men's slim color jeans",
        color_name: 'Black',
        color: '#000000',
        sizes: {
          S: { stock: 10, price: 154.9 },
          M: { stock: 7, price: 159.9 },
          L: { stock: 5, price: 159.9 },
          XL: { stock: 10, price: 164.9 },
          XXL: { stock: 12, price: 169.9 },
        },
        images: [
          '/RW23-SJM903-RDJ_F1.webp',
          '/RW23-SJM903-RDJ_F2.webp',
          '/RW23-SJM903-RDJ_F3.webp',
        ],
      },
    ],
    description: {
      body: 'Jeans from the Medicine collection in slim cut with a regular waist. Model made of washed denim. Slim fit jeans with a narrow leg, both in the thigh and ankle area. They emphasize the natural line of the silhouette, but do not hug it, they are comfortable for everyday use. - Regular waist. Slip-on pockets. - Decoratively washed denim. - Width at waist: 43.4 cm. - Width at hips: 51.4 cm. - Waist height: 26.2 cm. - Bottom leg width: 16.9 cm. - Inner leg length: 82 cm. - Dimensions given for size: 32.',
      fabric_main: ['88% Cotton', '11% Polyester', '1% Elastane'],
      fabric_other: ['100% Cotton'],
    },
  },
  {
    sex: 'male',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f18'), // cloth
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40015'),
    colors: [
      {
        name: "Men's slim jeans navy blue color",
        color_name: 'Navy blue',
        color: '#000080',
        sizes: {
          S: { stock: 10, price: 154.9 },
          M: { stock: 10, price: 159.9 },
          L: { stock: 4, price: 159.9 },
          XL: { stock: 11, price: 164.9 },
          XXL: { stock: 12, price: 169.9 },
        },
        images: [
          '/RW23-SJM903-59J_F1.webp',
          '/RW23-SJM903-59J_F3.webp',
          '/RW23-SJM903-59J_F4.webp',
        ],
      },
    ],
    description: {
      body: 'Jeans from the Medicine collection in slim cut with a regular waist. Model made of washed denim. Slim fit jeans with a narrow leg, both in the thigh and ankle area. They emphasize the natural line of the silhouette, but do not hug it, they are comfortable for everyday use. - Regular waist. - Slip-on pockets. - Decoratively washed denim. - Width at waist: 43.4 cm. - Width at hips: 51.4 cm. - Waist height: 26.2 cm. - Bottom leg width: 16.9 cm. - Inner leg length: 82 cm. - Dimensions given for size: 32.',
      fabric_main: ['88% Cotton', '11% Polyester', '1% Elastane'],
      fabric_other: ['100% Cotton'],
    },
  },
  {
    sex: 'male',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f18'),
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40015'),
    colors: [
      {
        name: "Men's jeans regular color blue",
        color_name: 'Blue',
        color: '#0000FF',
        sizes: {
          S: { stock: 11, price: 154.9 },
          M: { stock: 3, price: 159.9 },
          L: { stock: 5, price: 159.9 },
          XL: { stock: 8, price: 164.9 },
          XXL: { stock: 12, price: 169.9 },
        },
        images: [
          '/RW23-SJM902-55J_F1.webp',
          '/RW23-SJM902-55J_F3.webp',
          '/RW23-SJM902-55J_F4.webp',
        ],
      },
    ],
    description: {
      body: 'Jeans from the Medicine collection in regular cut with a regular waist. Model made of washed denim. Regular cut jeans with a classic cut with a straight leg along the entire length and a regular waist. Wider, but still straight leg, provides freedom of movement and comfort of wearing. Universal, and at the same time slightly looser cut of jeans makes them fit any type of figure. - Slip-on pockets. - Decoratively washed denim. - Width at waist: 41.7 cm. - Width at hips: 52.5 cm. Waist height: 25.7 cm. - Leg width at bottom: 19.5 cm. - Inner leg length: 80 cm. - Dimensions given for size: 31.',
      fabric_main: ['74% Cotton', '24% Polyester', '1% Elastane'],
      fabric_other: ['100% Cotton'],
    },
  },
  {
    sex: 'male',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f18'), // cloth
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40013'),

    colors: [
      {
        name: "Men's wool blend patterned shirt multicolor color",
        color_name: 'Multicolor',
        color: '/multicolor.png',
        sizes: {
          S: { stock: 10, price: 174.9 },
          M: { stock: 2, price: 179.9 },
          L: { stock: 5, price: 179.9 },
          XL: { stock: 10, price: 179.9 },
          XXL: { stock: 12, price: 189.9 },
        },
        images: [
          '/RW23-KDM901-MLA_F1.webp',
          '/RW23-KDM901-MLA_F2.webp',
          '/RW23-KDM901-MLA_F4.webp',
        ],
      },
    ],
    description: {
      body: 'Shirt from the collection of Medicine. The model is made of fabric with a blend of wool. It has a classic, padded collar. Oversize cut. Classic, stiffened kent collar. - Lowered shoulder line. - Buttoned cuffs. - Pockets on the chest. Button closure. - Patterned fabric. - Collar circumference: 47.5 cm. - Sleeve length(measured from the collar): 81.9 cm. - Length in front: 79.5 cm. - Length at back: 78.5 cm. - Width under the arms: 63 cm. - Dimensions given for size: L.',
      fabric_main: ['85% Polyester', '10% Wool', '5% Other material'],
      fabric_other: ['100% Cotton'],
    },
  },
  {
    sex: 'male',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f18'), // cloth
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40013'),

    colors: [
      {
        name: "Men's shirt with classic collar plain white color",
        color_name: 'White',
        color: '#E0E0E0',
        sizes: {
          S: { stock: 10, price: 154.9 },
          M: { stock: 2, price: 159.9 },
          L: { stock: 5, price: 159.9 },
          XL: { stock: 10, price: 164.9 },
          XXL: { stock: 12, price: 169.9 },
        },
        images: [
          '/RW23-KDM090-00X_F1.webp',
          '/RW23-KDM090-00X_F3.webp',
          '/RW23-KDM090-00X_F5.webp',
        ],
      },
    ],
    description: {
      body: 'Shirt from the collection of Medicine. Model made of smooth fabric. It has a classic collar. - Slim fit cut. - Long sleeve. - Buttoned cuffs. - Stiffened classic collar, kent type. - Button closure. - Smooth fabric. - Collar circumference: 42 cm. - Sleeve length: 67 cm. - Length in front: 76 cm. - Length at back: 75 cm. - Width under the arms: 52.5 cm. - Dimensions given for size: M.',
      fabric_main: ['98% Cotton', '2% Elastane'],
      fabric_other: ['100% Polyester'],
    },
  },
  {
    sex: 'male',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f19'), // shoes,
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40016'),

    colors: [
      {
        name: "Men's suede shoes brown color",
        color_name: 'Brown',
        color: '#964B00',
        sizes: {
          '39': { stock: 10, price: 299.9 },
          '40': { stock: 0, price: 299.9 },
          '41': { stock: 5, price: 299.9 },
          '42': { stock: 10, price: 299.9 },
          '43': { stock: 12, price: 299.9 },
        },
        images: [
          '/RW23-OBM406-89X_F1.webp',
          '/RW23-OBM406-89X_F2.webp',
          '/RW23-OBM406-89X_F4.webp',
        ],
      },
    ],
    description: {
      body: 'Shoes from the collection of Medicine. Model made of suede leather. - Round, stiffened nose. - Stiffened heel counter. - Rubber sole. - Lace-up model. - Elevated upper. - Comfortable interior. - The length of the insole is: 28 cm. - Dimensions given for size: 42.',
      fabric_main: ['100% Natural leather'],
      fabric_other: ['100% TPR'],
      fabric_inside: ['60% Natural leather', '40% Polyester'],
    },
  },
  {
    sex: 'male',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f19'), // shoes,
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40016'),

    colors: [
      {
        name: "Men's suede sneakers yellow color",
        color_name: 'Yellow',
        color: '#FFFF00',
        sizes: {
          '39': { stock: 0, price: 329.9 },
          '40': { stock: 0, price: 329.9 },
          '41': { stock: 7, price: 329.9 },
          '42': { stock: 20, price: 329.9 },
          '43': { stock: 10, price: 329.9 },
          '44': { stock: 20, price: 329.9 },
        },
        images: [
          '/RW23-OBM204-17X_F1.webp',
          '/RW23-OBM204-17X_F2.webp',
          '/RW23-OBM204-17X_F5.webp',
        ],
      },
    ],
    description: {
      body: 'Sneakers from the collection of Medicine. Model made of suede leather. - Round, stiffened nose. - Elevated upper. - Rubber sole. - Stiffened heel counter. - Textile interior. - Lace-up model. - The length of the insole is: 29 cm. - Dimensions given for size: 43.',
      fabric_main: ['100% Suede leather'],
      fabric_other: ['100% TPR'],
      fabric_inside: ['100% Polyester'],
    },
  },
  {
    sex: 'male',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f18'), // cloth
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40012'),
    colors: [
      {
        name: "Men's hoodie patterned beige color",
        color_name: 'Beige',
        color: '#8f6d42',
        sizes: {
          S: { stock: 10, price: 184.9 },
          M: { stock: 2, price: 189.9 },
          L: { stock: 5, price: 189.9 },
          XL: { stock: 6, price: 189.9 },
          XXL: { stock: 6, price: 199.9 },
        },
        images: [
          '/RS24-BLM600-80M_F1.webp',
          '/RS24-BLM600-80M_F2.webp',
          '/RS24-BLM600-80M_F3.webp',
        ],
      },
      {
        name: "Men's hoodie patterned blue color",
        color_name: 'Blue',
        color: '#0000FF',
        sizes: {
          S: { stock: 10, price: 184.9 },
          M: { stock: 0, price: 189.9 },
          L: { stock: 5, price: 189.9 },
          XL: { stock: 6, price: 189.9 },
          XXL: { stock: 1, price: 199.9 },
        },
        images: [
          '/RS24-BLM600-55M_F1.webp',
          '/RS24-BLM600-55M_F2.webp',
          '/RS24-BLM600-55M_F3.webp',
        ],
      },
      {
        name: "Men's hoodie patterned grey color",
        color_name: 'Grey',
        color: '#808080',
        sizes: {
          S: { stock: 10, price: 184.9 },
          M: { stock: 2, price: 189.9 },
          L: { stock: 0, price: 189.9 },
          XL: { stock: 6, price: 189.9 },
          XXL: { stock: 6, price: 199.9 },
        },
        images: [
          '/RS24-BLM600-GRM_F1.webp',
          '/RS24-BLM600-GRM_F2.webp',
          '/RS24-BLM600-GRM_F3.webp',
        ],
      },
    ],
    description: {
      body: 'Hooded sweatshirt from the Medicine collection. Zippered model made of patterned knit fabric. , - Regular cut. - Zipper closure. - Drawstring hood. - Two slip-on side pockets. - Ribbed trim. - Patterned knit fabric. - Sleeve length: 67.5 cm. - Length at front: 74 cm. - Length at back: 72.5 cm. - Width under the arms: 59 cm. - Dimensions given for size: L.',
      fabric_main: ['59% Cotton', '41% Polyester'],
      fabric_other: ['98% Cotton', '2% Elastane'],
    },
  },
  {
    sex: 'female',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f18'), // cloth
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40012'),
    colors: [
      {
        name: "Women's cotton patterned sweatshirt, black",
        color_name: 'Black',
        color: '#000000',
        sizes: {
          XS: { stock: 10, price: 179.9 },
          S: { stock: 0, price: 179.9 },
          M: { stock: 0, price: 179.9 },
          L: { stock: 7, price: 179.9 },
          XL: { stock: 20, price: 179.9 },
          XXL: { stock: 10, price: 179.9 },
        },
        images: [
          '/RW24-BLD070-99A_F1.webp',
          '/RW24-BLD070-99A_F2.webp',
          '/RW24-BLD070-99A_F3.webp',
        ],
      },
    ],
    description: {
      body: 'Model made of cotton jersey. - Material with the Oeko-Tex® Standard 100 certificate guarantees that textile products marked with it are free from harmful and potentially dangerous substances for humans and the environment. - Regular cut. - Long sleeve. - Turtleneck model. - Neckline tightened with drawstrings. - Two side slip pockets. - Rib trim. - Patterned jersey. - Pattern with a plant motif. - Sleeve length: 64 cm. - Length: 62.5 cm. - Bust width: 50 cm. - Dimensions given for size: S.',
      fabric_main: ['100% Cotton'],
    },
  },
  {
    sex: 'female',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f18'), // cloth
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40012'),
    colors: [
      {
        name: "Women's cotton patterned sweatshirt, black",
        color_name: 'Black',
        color: '#000000',
        sizes: {
          XS: { stock: 10, price: 189.9 },
          S: { stock: 1, price: 189.9 },
          M: { stock: 2, price: 189.9 },
          L: { stock: 7, price: 189.9 },
          XL: { stock: 20, price: 189.9 },
          XXL: { stock: 10, price: 189.9 },
        },
        images: [
          '/RW24-BLD701-99A_F1.webp',
          '/RW24-BLD701-99A_F2.webp',
          '/RW24-BLD701-99A_F3.webp',
        ],
      },
      {
        name: "Women's cotton patterned sweatshirt, beige",
        color_name: 'Beige',
        color: '#8f6d42',
        sizes: {
          XS: { stock: 10, price: 189.9 },
          S: { stock: 15, price: 189.9 },
          M: { stock: 20, price: 189.9 },
          L: { stock: 7, price: 189.9 },
          XL: { stock: 20, price: 189.9 },
          XXL: { stock: 10, price: 189.9 },
        },
        images: [
          '/RW24-BLD701-02A_F1.webp',
          '/RW24-BLD701-02A_F2.webp',
          '/RW24-BLD701-02A_F3.webp',
        ],
      },
    ],
    description: {
      body: 'Model made of cotton jersey. - Material with the Oeko-Tex® Standard 100 certificate guarantees that textile products marked with it are free from harmful and potentially dangerous substances for humans and the environment. - Regular cut. - Long sleeve. - Turtleneck model. - Neckline tightened with drawstrings. - Two side slip pockets. - Rib trim. - Patterned jersey. - Pattern with a plant motif. - Sleeve length: 64 cm. - Length: 64 cm. - Bust width: 50 cm. - Dimensions given for size: S.',
      fabric_main: ['100% Cotton'],
    },
  },
  {
    sex: 'female',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f18'), // cloth
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40012'),
    colors: [
      {
        name: "Women's patterned sweatshirt, multicolor",
        color_name: 'Multicolor',
        color: '/multicolor.png',
        sizes: {
          XS: { stock: 10, price: 209.9 },
          S: { stock: 0, price: 209.9 },
          M: { stock: 0, price: 209.9 },
          L: { stock: 7, price: 209.9 },
          XL: { stock: 20, price: 214.9 },
          XXL: { stock: 10, price: 219.9 },
        },
        images: [
          '/RW24-BLD901-MLA_F1.webp',
          '/RW24-BLD901-MLA_F2.webp',
          '/RW24-BLD901-MLA_F3.webp',
        ],
      },
    ],
    description: {
      body: 'Zippered model made of fleece material. - Oversized style. - Long sleeve. - Dropped shoulder line. - Raised collar. - Zippered fastening. - Ribbed finish. - Patterned knit. - Model made of comfortable, warm fleece. - Animal pattern. - Sleeve length (measured from the collar): 73.5 cm. - Length: 61 cm. - Bust width: 64 cm. - Dimensions given for size: S.',
      fabric_main: ['100% Polyester'],
      fabric_inside: ['95% Viscose', '5% Elastane'],
    },
  },
  {
    sex: 'female',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f18'), // cloth
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40013'), // shirt
    colors: [
      {
        name: "Women's regular textured blouse, pink",
        color_name: 'Pink',
        color: '#FF0FF0',
        sizes: {
          XS: { stock: 10, price: 139.9 },
          S: { stock: 2, price: 139.9 },
          M: { stock: 0, price: 139.9 },
          L: { stock: 7, price: 139.9 },
          XL: { stock: 20, price: 139.9 },
          XXL: { stock: 10, price: 139.9 },
        },
        images: [
          '/RS25-BDD104-43X_F1.webp',
          '/RS25-BDD104-43X_F2.webp',
          '/RS25-BDD104-43X_F3.webp',
        ],
      },
      {
        name: "Women's regular textured blouse, pink",
        color_name: 'White',
        color: '#E0E0E0',
        sizes: {
          XS: { stock: 10, price: 139.9 },
          S: { stock: 2, price: 139.9 },
          M: { stock: 2, price: 139.9 },
          L: { stock: 7, price: 139.9 },
          XL: { stock: 0, price: 139.9 },
          XXL: { stock: 10, price: 139.9 },
        },
        images: [
          '/RS25-BDD104-01X_F1.webp',
          '/RS25-BDD104-01X_F2.webp',
          '/RS25-BDD104-01X_F3.webp',
        ],
      },
    ],
    description: {
      body: 'Model made of textured fabric. It has a decorative stand-up collar. - Regular cut. - Long, puffy sleeves. - Sleeves finished with elastic band.- Model with a stand-up collar. - Front slit fastened with a decorative button. - Model with decorative ruffles. - Material with texture. - Model made of transparent material. - Decorative finishes. - Sleeve length: 64 cm. - Length: 61.5 cm. - Bust width: 52 cm. - Dimensions given for size: S.',
      fabric_main: ['100% Polyester'],
    },
  },
  {
    sex: 'female',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f18'), // cloth
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40013'), // shirt
    colors: [
      {
        name: "Women's patterned sweatshirt, multicolor",
        color_name: 'Black',
        color: '#000000',
        sizes: {
          XS: { stock: 10, price: 169.9 },
          S: { stock: 0, price: 169.9 },
          M: { stock: 0, price: 169.9 },
          L: { stock: 7, price: 169.9 },
          XL: { stock: 20, price: 169.9 },
          XXL: { stock: 10, price: 169.9 },
        },
        images: [
          '/RW24-KDDB53-99A_F1.webp',
          '/RW24-KDDB53-99A_F2.webp',
          '/RW24-KDDB53-99A_F3.webp',
        ],
      },
    ],
    description: {
      body: 'Model made of fabric with decorative embroidery. - Regular fit. - Long, puffy sleeves. - Buttoned cuffs. - Model with collar. - Button fastening. - Model with decorative embroidery. - Pattern with a plant motif. - Sleeve length: 63 cm. - Length: 65 cm. - Bust width: 56 cm. - Dimensions given for size: S.',
      fabric_main: ['100% Viscose'],
    },
  },
  {
    sex: 'female',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f18'), // cloth
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40013'), // shirt
    colors: [
      {
        name: 'Bluzka damska kolor granatowy',
        color_name: 'Navy blue',
        color: '#000080',
        sizes: {
          XS: { stock: 10, price: 149.9 },
          S: { stock: 10, price: 149.9 },
          M: { stock: 10, price: 149.9 },
          L: { stock: 7, price: 149.9 },
          XL: { stock: 20, price: 149.9 },
          XXL: { stock: 10, price: 149.9 },
        },
        images: [
          '/RW24-BDDB53-59A_F1.webp',
          '/RW24-BDDB53-59A_F2.webp',
          '/RW24-BDDB53-59A_F3.webp',
        ],
      },
    ],
    description: {
      body: 'Model made of patterned fabric. - Regular fit. - Long, puffy sleeves. - Buttoned cuffs. - Round neckline. - Button closure at the back. - Patterned fabric. - Sleeve length: 64 cm. - Length: 62 cm. - Bust width: 51.5 cm. - Dimensions given for size: S.',
      fabric_main: ['100% Viscose'],
    },
  },
  {
    sex: 'female',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f19'), // shoes,
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40017'), // flip flops

    colors: [
      {
        name: "Women's slippers made of imitation fur, orange",
        color_name: 'Orange',
        color: '#FF6E00',
        sizes: {
          '35': { stock: 7, price: 59.9 },
          '36': { stock: 10, price: 59.9 },
          '37': { stock: 7, price: 59.9 },
          '38': { stock: 20, price: 59.9 },
          '39': { stock: 10, price: 59.9 },
          '40': { stock: 20, price: 59.9 },
          '41': { stock: 20, price: 59.9 },
        },
        images: [
          '/RW24-KAD802-22X_F1.webp',
          '/RW24-KAD802-22X_F2.webp',
          '/RW24-KAD802-22X_F3.webp',
        ],
      },
    ],
    description: {
      body: 'Model made of imitation fur. - Slip-on model. - Round toe. - Rubber sole. - Comfortable interior. - Model made of imitation fur. - Soft, pleasant to the touch material. - Decorative details. - Length of the insole: 25 cm. - Dimensions given for size: 38/39.',
      fabric_main: ['100% Polyester'],
      fabric_other: ['100% TPR'],
      fabric_inside: ['100% Polyester'],
    },
  },
  {
    sex: 'female',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f19'), // shoes,
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40017'), // flip flops

    colors: [
      {
        name: "Women's slippers made of imitation fur, gray color",
        color_name: 'Gray',
        color: '#C0C0C0',
        sizes: {
          '35': { stock: 7, price: 59.9 },
          '36': { stock: 10, price: 59.9 },
          '37': { stock: 7, price: 59.9 },
          '38': { stock: 20, price: 59.9 },
          '39': { stock: 10, price: 59.9 },
          '40': { stock: 20, price: 59.9 },
          '41': { stock: 0, price: 59.9 },
        },
        images: [
          '/RW24-KAD800-09X_F1.webp',
          '/RW24-KAD800-09X_F2.webp',
          '/RW24-KAD800-09X_F3.webp',
        ],
      },
    ],
    description: {
      body: 'Model made of imitation fur. - Slip-on model. - Round toe. - Comfortable interior. - Rubber sole. - Model made of imitation fur. - Soft, pleasant to the touch material. - Decorative details. - The length of the insole is: 25 cm. - Dimensions given for size: 38/39.',
      fabric_main: ['100% Suede leather'],
      fabric_other: ['100% TPR'],
      fabric_inside: ['100% Polyester'],
    },
  },
  {
    sex: 'female',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f19'), // shoes,
    type: new Types.ObjectId('6762ba88b6b04cd8c6e4001a'), // ankle shoes

    colors: [
      {
        name: "Women's leather ankle boots, black",
        color_name: 'Black',
        color: '#000000',
        sizes: {
          '35': { stock: 7, price: 329.9 },
          '36': { stock: 10, price: 329.9 },
          '37': { stock: 7, price: 329.9 },
          '38': { stock: 20, price: 329.9 },
          '39': { stock: 10, price: 329.9 },
          '40': { stock: 20, price: 329.9 },
          '41': { stock: 30, price: 329.9 },
        },
        images: [
          '/RW24-OBD600-99X_F1.webp',
          '/RW24-OBD600-99X_F2.webp',
          '/RW24-OBD600-99X_F3.webp',
        ],
      },
    ],
    description: {
      body: 'Model made of natural leather. - Round, stiffened nose. - Stiffened heel counter. - Embossed, rubber sole. - Comfortable foam insole. - Lace-up model. - Comfortable interior. - Decorative stitching. - Model on a platform. - Platform height: 2.5 cm. - Heel height: 4 cm. - The length of the insole is: 24 cm. - Dimensions given for size: 37.',
      fabric_main: ['100% Genuine Leather'],
      fabric_other: ['100% TPR'],
      fabric_inside: ['100% Polyester'],
    },
  },
  {
    sex: 'female',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f19'), // shoes,
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40016'),

    colors: [
      {
        name: "Women's sneakers made of ecological leather, color black",
        color_name: 'Black',
        color: '#000000',
        sizes: {
          '35': { stock: 0, price: 179.9 },
          '36': { stock: 0, price: 179.9 },
          '37': { stock: 7, price: 179.9 },
          '38': { stock: 20, price: 179.9 },
          '39': { stock: 10, price: 179.9 },
          '40': { stock: 20, price: 179.9 },
          '41': { stock: 10, price: 179.9 },
          '42': { stock: 20, price: 179.9 },
        },
        images: [
          '/RW24-OBD201-99X_F1.webp',
          '/RW24-OBD201-99X_F2.webp',
          '/RW24-OBD201-99X_F3.webp',
        ],
      },
    ],
    description: {
      body: 'Model made of eco-leather. - Round, rubberized toe. - Stiffened heel counter. - Comfortable, cotton interior. - Rubber sole. - Lace-up model. - Comfortable foam insole. - Model with rivet application. - Model on platform. - Length of the insole: 24 cm. - Dimensions given for size: 37.',
      fabric_main: ['100% Polyurethane'],
      fabric_other: ['100% Rubber'],
      fabric_inside: ['100% Cotton'],
    },
  },
  {
    sex: 'female',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f19'), // shoes,
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40016'),

    colors: [
      {
        name: "Women's leather sneakers, beige color",
        color_name: 'Beige',
        color: '#8f6d42',
        sizes: {
          '35': { stock: 0, price: 129.9 },
          '36': { stock: 1, price: 129.9 },
          '37': { stock: 7, price: 129.9 },
          '38': { stock: 20, price: 129.9 },
          '39': { stock: 10, price: 129.9 },
          '40': { stock: 20, price: 129.9 },
          '41': { stock: 10, price: 129.9 },
          '42': { stock: 20, price: 129.9 },
        },
        images: [
          '/RS24-OBD301-02X_F1.webp',
          '/RS24-OBD301-02X_F2.webp',
          '/RS24-OBD301-02X_F3.webp',
        ],
      },
      {
        name: "Women's leather sneakers, black color",
        color_name: 'Black',
        color: '#000000',
        sizes: {
          '35': { stock: 10, price: 129.9 },
          '36': { stock: 1, price: 129.9 },
          '37': { stock: 7, price: 129.9 },
          '38': { stock: 0, price: 129.9 },
          '39': { stock: 0, price: 129.9 },
          '40': { stock: 20, price: 129.9 },
          '41': { stock: 10, price: 129.9 },
          '42': { stock: 20, price: 129.9 },
        },
        images: [
          '/RS24-OBD301-99X_F1.webp',
          '/RS24-OBD301-99X_F2.webp',
          '/RS24-OBD301-99X_F3.webp',
        ],
      },
    ],
    description: {
      body: 'Model made of natural leather. - Round, stiffened nose. - Stiffened heel counter. - Classic lacing allows for individual adjustment to the foot. - Rubber sole. - Comfortable foam insole. - Comfortable interior. - Sole height: 2.5 cm. - The length of the insole is: 24 cm. - Dimensions given for size: 37.',
      fabric_main: ['100% Genuine leather'],
      fabric_other: ['100% TPR'],
      fabric_inside: ['100% Cotton'],
    },
  },
  {
    sex: 'female',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f1a'), // accessories,
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40018'), //hats

    colors: [
      {
        name: "Women's beanie hat with pompom, purple",
        color_name: 'Purple',
        color: '#6F2DA8',
        sizes: {
          ONE: { stock: 100, price: 99.9 },
        },
        images: [
          '/RW24-CAD901-44M_F1.webp',
          '/RW24-CAD901-44M_F2.webp',
          '/RW24-CAD901-44M_F3.webp',
        ],
      },
      {
        name: "Women's beanie hat with pompom, pink",
        color_name: 'Pink',
        color: '#FF0FF0',
        sizes: {
          ONE: { stock: 90, price: 99.9 },
        },
        images: [
          '/RW24-CAD901-39M_F1.webp',
          '/RW24-CAD901-39M_F2.webp',
          '/RW24-CAD901-39M_F3.webp',
        ],
      },
    ],
    description: {
      body: 'Model made of melange knit. - Beanie model. - Model with a pompom. - Rolled edge. - Melange knit. - Model with lining.',
      fabric_main: ['76% Acrylic', '12% Polyester', '12% Polyamide'],
      fabric_other: ['100% Polyester'],
    },
  },
  {
    sex: 'female',
    currency: 'PLN',
    category: new Types.ObjectId('6762bb01f1ff53da64083f1a'), // accessories,
    type: new Types.ObjectId('6762ba88b6b04cd8c6e40019'), //hats

    colors: [
      {
        name: "Women's smooth leather belt, brown color",
        color_name: 'Brown',
        color: '#964B00',
        sizes: {
          S: { stock: 10, price: 99.9 },
          M: { stock: 0, price: 99.9 },
          L: { stock: 10, price: 99.9 },
        },
        images: [
          '/RW24-PAD706-88X_F1.webp',
          '/RW24-PAD706-88X_F2.webp',
          '/RW24-PAD706-88X_F3.webp',
        ],
      },
    ],
    description: {
      body: 'Model made of natural leather. - Model manufactured in Poland. - Buckle fastening with a pin. - Number of holes: 7. - Strap width: 3.4 cm. - Strap length from the beginning of the buckle to the fourth hole: 80 cm. - Total length of the strap: 95 cm. - Dimensions given for a strap in size: S.',
      fabric_main: ['100% Genuine leather'],
    },
  },
];
