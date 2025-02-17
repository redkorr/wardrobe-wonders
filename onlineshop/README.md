# Wardrobe Wonders Frontend

This repository contains the frontend code for an online shopping platform built using **React**, **Vite**.

## Development

### Running the Development Server

Start the development server with:

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to see your application in action.

### Code Formatting and Linting

- **Linting**: Run the linter with:

  ```bash
  npm run lint
  ```

- **Formatting**: Format the codebase using Prettier:

  ```bash
  npm run format
  ```

---

## Build and Deployment

To build the application for production, run:

```bash
npm run build
```

The output will be in the `dist` directory. Deploy it to your preferred hosting service.

---

## Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)

---

## Directory Structure

```plaintext
.
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable components
│   ├── features/       # Redux features
│   ├── pages/          # Application routes
│   ├── hooks/          # Custom hooks
│   ├── assets/         # Assets like images and icons
│   ├── styles/         # Tailwind CSS configurations
│   ├── utils/          # Utility functions and helpers
│   └── index.tsx       # Entry point
├── package.json        # Project metadata and dependencies
├── tailwind.config.cjs # Tailwind CSS configuration
└── vite.config.ts      # Vite configuration
```

---

## Views

- **Home**: `/`
- **Male Products**: `/products/his`
- **Selected Product**: `/product/85afe6f3-30b6-4c1b-9a62-aa11fc76dd9b/Green`
- **Shopping Cart**: `/shopping-cart`
- **Account Settings**: `/my-account` (requires logging in)
- **Checkout**: `/checkout` (user must have an item in cart)

---

## License

This project is licensed under the [MIT License](LICENSE).
