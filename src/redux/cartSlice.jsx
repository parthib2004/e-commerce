import { createSlice } from '@reduxjs/toolkit';

// Retrieve cart items from localStorage
let initialState = [];
const cartItemsString = localStorage.getItem('cartItems');
if (cartItemsString) {
    try {
        initialState = JSON.parse(cartItemsString);
    } catch (error) {
        console.error("Error parsing cart items JSON:", error);
    }
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state));
        },
        deleteFromCart: (state, action) => {
            const newState = state.filter(item => item.id !== action.payload.id);
            localStorage.setItem('cartItems', JSON.stringify(newState));
            return newState;
        },
        incrementQuantity: (state, action) => {
            const newState = state.map(item => {
                if (item.id === action.payload) {
                    item.quantity++;
                }
                return item;
            });
            localStorage.setItem('cartItems', JSON.stringify(newState));
            return newState;
        },
        decrementQuantity: (state, action) => {
            const newState = state.map(item => {
                if (item.id === action.payload && item.quantity > 1) {
                    item.quantity--;
                }
                return item;
            });
            localStorage.setItem('cartItems', JSON.stringify(newState));
            return newState;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;