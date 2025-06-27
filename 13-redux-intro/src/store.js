import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./features/customers/CustomerSlice";
import accountSlice from "./features/accounts/AccountSlice";

const store = configureStore({
  reducer: {
    customer: customerSlice,
    account: accountSlice,
  },
});

export default store;
