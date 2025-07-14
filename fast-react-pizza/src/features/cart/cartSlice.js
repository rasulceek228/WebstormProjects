import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            //payload = newItem
            state.cart.push(action.payload);
        },
        deleteItem: (state, action) => {
            state.cart = state.cart.filter(pizza => pizza.pizzaId !== action.payload )
        },
        increaseItemQuantity: (state, action) => {
            const item = state.cart.find(item => item.pizzaId === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQuantity: (state, action) => {
            const item = state.cart.find(item => item.pizzaId === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;

            if(item.quantity === 0) cartSlice.caseReducers.deleteItem(state,action)
        },
        clearCart: (state) => {
            state.cart = [];
        }
    }
});

export const {addItem, clearCart ,deleteItem, increaseItemQuantity, decreaseItemQuantity} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalPizzaQuantity = (state) => state.cart.cart.reduce((acc, item) => acc + item.quantity, 0)
export const getTotalPrice = (state) => state.cart.cart.reduce((acc, item) => acc + item.unitPrice, 0)

export const getCurrentQuantity = id => state => state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0;