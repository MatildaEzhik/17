import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'product',
    initialState: {
        products: [
            {
                "id": 1,
                "title": "Товар 1",
                "price": 100
            },
            {
                "id": 2,
                "title": "Товар 2",
                "price": 250.50
            },
            {
                "id": 3,
                "title": "Товар 3",
                "price": 15.99
            }
        ]
    },
    reducers: {
        updatePrice: (state, { id, newPrice }) => {

        }
    },
})
