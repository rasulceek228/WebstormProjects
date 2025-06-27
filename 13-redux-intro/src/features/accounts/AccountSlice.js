import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  LoanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        if (state.loan.amount > 0) return;

        state.loan = action.payload.amount;
        state.LoanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state) {
      state.balance = state.balance - state.loan;
      state.loan = 0;
      state.LoanPurpose = "";
    },
    converting(state) {
      state.isLoading = true;
    },
  },
});

export const { requestLoan, payLoan, withdraw } = accountSlice.actions;

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "accounts/deposit", payload: amount };

  return async function (dispatch, getState) {
    try {
      dispatch({ type: "accounts/converting" });
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`,
      );
      const data = await res.json();
      const converted = data.rates.USD;

      dispatch({ type: "accounts/deposit", payload: converted });
    } catch {
      return { type: "accounts/deposit", payload: 0 };
    }
  };
}

export default accountSlice.reducer;

/*
export default function reducerAccount(state = initialStateAccount, action) {
  switch (action.type) {
    case "accounts/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case "accounts/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "accounts/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        currentLoanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "accounts/payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        currentLoanPurpose: "",
      };
    case "accounts/converting":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "accounts/deposit", payload: amount };

  return async function (dispatch, getState) {
    try {
      dispatch({ type: "accounts/converting" });
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`,
      );
      const data = await res.json();
      const converted = data.rates.USD;

      dispatch({ type: "accounts/deposit", payload: converted });
    } catch {
      return { type: "accounts/deposit", payload: 0 };
    }
  };
}

export function withdraw(amount) {
  return { type: "accounts/withdraw", payload: amount };
}

export function requestLoan(amount, purpose) {
  return {
    type: "accounts/requestLoan",
    payload: { amount, purpose },
  };
}

export function payLoan() {
  return { type: "accounts/payLoan" };
}
*/
