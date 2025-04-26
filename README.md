Table of Contents
Overview

Features

Technologies Used

Installation

Usage

Project Structure

Redux Store

API Integration

Contributing

License

Overview
ShoppyGlobe is a modern e-commerce application built with React, Redux, and React Router. It features product listings, product details, shopping cart functionality, and responsive design.

Features
Product Listing: View all available products with images, prices, and ratings

Product Search: Filter products by name

Product Details: View detailed information about each product

Shopping Cart:

Add/remove products

Adjust quantities

View cart total

Responsive Design: Works on mobile, tablet, and desktop

State Management: Redux for centralized cart state

Routing: React Router for seamless navigation

Technologies Used
React - JavaScript library for building user interfaces

Redux Toolkit - State management

React Router - Client-side routing

Vite - Build tool and development server

Axios - HTTP client for API requests

CSS3 - Styling

Installation
Clone the repository:

bash
git clone https://github.com/your-username/shoppy-globe.git
cd shoppy-globe
Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev
Open your browser and navigate to:

http://localhost:5173
Usage
Browse products on the home page

Click on a product to view details

Add products to your cart

Adjust quantities or remove items from the cart

View your cart total

Project Structure
src/
├── components/          # Reusable UI components
│   ├── Cart/           # Cart related components
│   ├── Header/         # Header component
│   ├── Product/        # Product related components
│   └── NotFound.jsx    # 404 page
├── hooks/              # Custom hooks
├── pages/              # Page components
├── redux/              # Redux store configuration
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles
Redux Store
The application uses Redux Toolkit to manage the shopping cart state. The store includes:

cartSlice: Handles all cart-related actions

addToCart: Adds a product to the cart or increments quantity

removeFromCart: Removes a product from the cart

updateQuantity: Updates the quantity of a cart item

clearCart: Empties the cart completely

API Integration
The application fetches product data from the DummyJSON API:

Product list: https://dummyjson.com/products

Single product: https://dummyjson.com/products/{id}

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository

Create a new branch (git checkout -b feature-branch)

Commit your changes (git commit -m 'Add new feature')

Push to the branch (git push origin feature-branch)

Open a Pull Request