/// imports/exports for typescript

// import {calInventoryValule } from "../src/inventory";

export interface Product {
    name: string;
    price: number;
}

const productArray: Product[] = [
    {
    name: "Polluted Delta",
    price: 38
    },
    {
    name: "Misty Rainforest",
    price: 38
    },
    {
    name: "Verdant Catacombs",
    price: 35  
    },
    {
    name: "Watery Grave",
    price: 11
    },
    {
    name: "Breeding Pool",
    price: 17
    },
    {
    name: "Overgrown Tomb",
    price: 12
    }
] 

export function calcAverageProductPrice(productArray: Product[]) : number {
    let totalPrice: number = 0;
    let averagePrice: number = totalPrice / productArray.length;
    productArray.forEach((product) => {
        totalPrice = totalPrice + product.price;
    }) 
    console.log(averagePrice);
    return averagePrice;
}