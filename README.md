🍰 CAKERY Shop

CAKERY Shop is an online cake ordering and customization platform built with Next.js.
It allows users to browse different cake categories, customize cakes based on their preferences, and place orders easily.
The project focuses on a smooth user experience with responsive design and dynamic price calculation  all handled on the frontend.

📌 Short Project Description

Cakery Shop is a modern web application designed to make cake ordering easy, fast, and enjoyable.
Users can explore various cake types, customize size, flavor, and toppings, and place orders with delivery details.
Authentication is included to protect private routes such as ordering and order history.

⚠️ This project uses frontend-only data handling (no backend). Data is fetched from static/mock sources or APIs.

## ⚙️ Setup & Installation Instructions

Follow these steps to run the project locally:

# Clone the repository

git clone 

# Navigate into the project folder

cd cakery-shop

# Install dependencies

npm install

# Run the development server
npm run dev


The application will run at:

http://localhost:3000

🗂️ Route Summary

✅ Implemented Features

1.Responsive design (Mobile, Tablet, Desktop)

2.User authentication (Email & Password, Google Login)

3.Cake browsing by category

4.Cake detail pages

5.Cake customization (size, flavor, toppings)

6.Dynamic price calculation

7.Order placement with delivery date & time

8.Order status tracking

9.My Orders page

10.Protected private routes

11.Metadata implementation (Home & Cake Details)

12.Custom 404 error page

## 🧩 Feature Explanation

## 1.🧁 Cake Browsing

Users can explore different types of cakes such as birthday, wedding, and special occasion cakes.

## 2.🎨 Cake Customization

On the cake detail page, users can:

Select cake size

Choose flavor

Add toppings
The total price updates dynamically based on selections.

## 3.🔐 Authentication

Users can register and log in using:

Email & Password

Google Social Login
Private routes remain accessible after page reload if the user is logged in.

## 4.🛒 Order Placement

Users can:

Choose delivery date & time

Review total cost

Place orders
Orders are saved with Pending status.

## 5.📦 My Orders

Users can view all their orders with:

Cake name

Customization details

Delivery date

Total cost

Order status
Options include viewing details and canceling orders.



## 6.🌱 Environment Variables

All sensitive configuration keys are stored using environment variables:

NEXT_PUBLIC_*

## 🔗 Live & Repository Links

Live Site: https://my-cake-store-beta.vercel.app/