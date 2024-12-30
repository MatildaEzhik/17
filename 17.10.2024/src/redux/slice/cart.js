import { createSlice } from "@reduxjs/toolkit";

export const cartsSlice = createSlice({
    name: 'carts',
    initialState: {
        carts: []
    },
    reducers: {
        addInCart: (state, { product }) => {
            const indexCart = state.carts.findIndex(item => item.id === product.id);
            if (indexCart === -1) {
                state.carts.push(product);
            }
            else {
                state.carts[indexCart].count += 1;
            }
        }
    },
})
export const { addInCart } = cartsSlice.actions
