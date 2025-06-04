# Wiseman Collectables E-Commerce Website

🔘 Check it out [here](https://wiseman-marketplace-1.onrender.com/)!

This repository contains the code for the Wiseman Collectables E-Commerce Website. The project is divided into two main sections:

- **Client:** A React-based frontend featuring Auth0 authentication.
- **Server:** A Node.js/Express backend that handles API requests (products, cart) and serves static image files.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Environment Variables](#environment-variables)
- [Development](#development)
- [Deployment (Render)](#deployment-render)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Project Structure

```
Wiseman-Marketplace/
├── client/                    # React application
│   ├── public/
│   ├── src/
│   │   ├── auth0-provider-with-history.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   └── Checkout.tsx
│   │   └── ... (other components)
│   └── .env                 # Environment variables for the client
├── server/                    # Express server
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── productController.ts
│   │   │   └── cartController.ts
│   │   ├── routes/
│   │   │   ├── productRoutes.ts
│   │   │   └── cartRoutes.ts
│   │   └── index.ts         # Main server entry file
│   ├── public/
│   │   └── images/          # Static images served by Express
│   └── dist/                # Compiled output for deployment
└── README.md
```

---

## Setup & Installation

### Backend

1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. (Optional) If you use TypeScript, compile the project:
   ```bash
   npm run build
   ```
4. Run the server locally:
   ```bash
   npm start
   ```
   The server starts on port `4000` by default and exposes API endpoints like `/api/products` and `/api/cart`.

### Frontend

1. Navigate to the client folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file (see [Environment Variables](#environment-variables)).
4. Run the application:
   ```bash
   npm start
   ```
   The client runs on port `3000` by default.

---

## Environment Variables

### Client (.env)

Ensure you have a `.env` file in the `client/` directory with the following variables:

```
REACT_APP_API_URL=https://wiseman-marketplace.onrender.com
REACT_APP_AUTH0_DOMAIN=your-domain.auth0.com
REACT_APP_AUTH0_CLIENT_ID=your-client-id
```

- `REACT_APP_API_URL` is used by the React app (e.g., in `Checkout.tsx`) to call the back-end API.
- Auth0 variables are used by the `auth0-provider-with-history.tsx` for handling authentication.

### Server

If needed, you can similarly configure server-side environment variables (e.g., for a custom PORT) in a `.env` file in the `server/` directory.

---

## Development

- **Local Development:**  
  Use the provided `.env` settings to point your client to `http://localhost:4000` (if needed) by updating the API URL in the `.env` file. The server’s CORS is configured to allow both:
  - `https://wiseman-marketplace-1.onrender.com` (production frontend)
  - `http://localhost:3000` (local frontend)

- **Static Files:**  
  Your server serves static images from the `/images` endpoint. Make sure that images are placed in the correct folder (`server/public/images`).

- **API Routes:**  
  - `/api/products`: To fetch, add, or remove products.
  - `/api/cart`: To manage the shopping cart (add, view, remove items).

---

## Deployment (Render)

When deploying on Render, please keep these points in mind:

- **Backend CORS:**  
  Your backend’s CORS is configured to accept requests from `https://wiseman-marketplace-1.onrender.com`.

- **URL Matching:**  
  - **Frontend URL (permitted in CORS):** `https://wiseman-marketplace-1.onrender.com`
  - **Backend URL (for API calls):** `https://wiseman-marketplace.onrender.com`

  Ensure that your client’s API calls reference the correct backend URL, either by using environment variables (e.g., `REACT_APP_API_URL`) or by correctly configuring your proxy.

- **Static Content:**  
  The Express server is set up to serve static images via:
  ```javascript
  app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
  ```
  Confirm that your images are located in the expected folder structure relative to your compiled output.

---

## API Endpoints

Below are some key API endpoints and their purpose:

- **GET `/` :**  
  Health check (returns "Backend is live!").
  
- **Products:**  
  - **GET `/api/products` :** Returns a list of available products.
  - **PUT/DELETE:** Available endpoints for updating or removing products (ensure proper id handling).
  
- **Cart:**  
  - **GET `/api/cart` :** Returns the current shopping cart.
  - **POST `/api/cart/:id` :** Adds a product to the shopping cart.
  - **DELETE `/api/cart/:id` :** Removes a product from the shopping cart.

---

## License

[MIT License](LICENSE)

---

Feel free to update this README with any additional details or instructions that your project might need.
