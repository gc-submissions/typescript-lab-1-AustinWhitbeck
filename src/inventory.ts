import { Product } from './products';

export interface InventoryItem {
    product: Product;
    quantity: number;
}

export const inventoryArray: InventoryItem[] = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20
    }
]


export function calcInventoryValue(inventoryArray: InventoryItem[]): number {
    let totalValue: number = 0;
    // if (inventoryArray: InventoryItem[] === null){
    // }
    inventoryArray.forEach((item) => {
        totalValue = totalValue + item.product.price;
    })
    console.log(totalValue)
    return totalValue;
}


