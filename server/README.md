# Online Shop Backend

This repository contains the backend code for an online shopping platform built using **Node.js**, **Express**, and **MongoDB**.

## Development

### Running the Development Server

Start the development server with:

```bash
npm run dev
```

Create a `.env` file in the `server` directory based on the `.env.example` file:

```
MONGODB_PASSWORD=<your-mongodb-password>
PORT=<port-number>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
```

## Scripts

- **Start Development Server:** `npm run dev`
- **Mock Data:**
  - Insert Products: `npm run mock:products`
  - Insert Categories: `npm run mock:categories`
  - Insert Product Types: `npm run mock:types`
  - Insert Discounts: `npm run mock:discounts`

## Tech Stack

- Framework: Express
- Database: MongoDB
- ORM: Mongoose
- Payment Processing: Stripe

## Directoru Structure

```plaintext
server/
├── .env                # Environment variables
├── .env.example        # Example environment variables
├── .gitignore          # Git ignore file
├── lib/                # Library files
├── mockdata/           # Mock data scripts
├── models/             # Mongoose models
├── routes/             # Express routes
├── scripts/            # Utility scripts
├── stripe/             # Stripe integration
├── server.ts           # Entry point
├── package.json        # Project metadata and dependencies
└── tsconfig.json       # TypeScript configuration
```

## API Endpoints

**Products**

- `GET /api/products`: Get all products
- `GET /api/products/:sex/:category?/:type?`: Get products filtered by path parameters

**Product**

- `GET /api/product/:id`: Get a product by ID

**Categories**

- `GET /api/categories`: Get all categories

**Billing Address**

- `GET /api/billing-address/:id`: Get all billing addresses by user ID
- `POST /api/billing-address`: Create a new billing address
- `PUT /api/billing-address/:id`: Update a billing address
- `DELETE /api/billing-address/:id`: Delete a billing address

**Orders**

- `GET /api/order/:id`: Get all orders by user ID
- `POST /api/order`: Create a new order

**Filters**

- `GET /api/filters/:sex?/:category?/:type?`: Get filters based on path parameters

**Discounts**

- `GET /api/discount/:code`: Get a discount by code

**Payment**

- `POST /api/payment`: Process a payment

## License

This project is licensed under the [MIT License](LICENSE).
