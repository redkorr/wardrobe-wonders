# Wardrobe Wonders

Wardrobe Wonders is a comprehensive online shopping platform designed to provide users with a seamless and enjoyable shopping experience. The platform is divided into two main parts: the frontend and the backend.

## Running the Project

1. Navigate to the onlineshop directory:

```bash
cd onlineshop
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the `onlineshop` directory based on the `.env.example` file:

```
REACT_APP_CLERK_PUBLISHABLE_KEY=<your-clerk-public-key>
VITE_API_URL=<your-api-url>
VITE_APP_STRIPE_PUBLISHABLE_KEY=<your-stripe-public-key>
```

4. Create an account on [Clerk](https://clerk.dev). Copy the public key and paste it in the `.env` file.

5. Create an account on [Stripe](https://stripe.com). Copy the public key and paste it in the `.env` file.

6. Start the development server:

```bash
npm run dev
```

Visit http://localhost:5173 to see the application in action.

## Backend

1. Navigate to the server directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Create an account on [MongoDB](https://www.mongodb.com). Create a new cluster and copy the connection string. Replace the password with the password you set for the user.

4. Copy the secret key from [Stripe](https://stripe.com) and paste it in the `.env` file.

5. Create a `.env` file in the `server` directory based on the `.env.example` file:

```
MONGODB_PASSWORD=<your-mongodb-password>
PORT=<port-number>
STRIPE_SECRET=<your-stripe-secret-key>
```

6. Run mock data scripts:

```bash
npm run mock:types
npm run mock:categries
npm run mock:products
npm run mock:discouts
```

7. Start the development server:

```bash
npm run dev
```

## License

This project is licensed under the [MIT License](LICENSE).
