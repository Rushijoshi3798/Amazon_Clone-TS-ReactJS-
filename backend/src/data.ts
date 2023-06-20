import { product } from "./types/product";

export const sampleProducts: product[] = [
    {
        name: "Nike Slim Shirt",
        slug: 'nike-slim-shirt',
        image: "../images/p1.jpg",
        category: "Shirts",
        brand: "Nike",
        price: 1200,
        countInStock: 10,
        description: 'high quality shirt',
        rating: 4.5,
        numReviews: 10
    },
    {
        name: "Adidas Fit Shirt",
        slug: 'adidas-slim-shirt',
        image: "../images/p2.jpg",
        category: "Shirts",
        brand: "Adidas",
        price: 1500,
        countInStock: 12,
        description: 'high quality shirt',
        rating: 4.3,
        numReviews: 13
    },
    {
        name: "Puma Fit Pant",
        slug: 'puma-slim-pant',
        image: "../images/p3.jpg",
        category: "Pants",
        brand: "Puma",
        price: 2100,
        countInStock: 20,
        description: 'high quality Pants',
        rating: 3.8,
        numReviews: 22
    },
    {
        name: "Nike Slim Pant",
        slug: 'nike-slim-Pant',
        image: "../images/p4.jpg",
        category: "Pants",
        brand: "Nike",
        price: 3400,
        countInStock: 15,
        description: 'high quality pants',
        rating: 4.3,
        numReviews: 14
    },
]