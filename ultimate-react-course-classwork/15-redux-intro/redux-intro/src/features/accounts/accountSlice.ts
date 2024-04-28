import { createStore } from "redux";

interface state {
  balance: number;
  loan: number;
  loanPurpose: string;
}

interface actionType {
  type: string;
  payload: state;
}

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function reducer(state = initialState, action: actionType) {
  const { type, payload } = action;
  switch (type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + payload.balance,
      };

    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - payload.balance,
      };

    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: payload.loan,
        loanPurpose: payload.loanPurpose,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        // balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

/** Working with Action Creator */
export function deposit(amount: number) {
  return {
    type: "account/deposit",
    payload: { ...initialState, balance: amount },
  };
}
export function withdraw(amount: number) {
  return {
    type: "account/withdraw",
    payload: { ...initialState, balance: amount },
  };
}
export function requestLoan(loan: number, loanPurpose: string) {
  return {
    type: "account/requestLoan",
    payload: { ...initialState, loan: loan, loanPurpose: loanPurpose },
  };
}
export function payLoan() {
  return {
    type: "account/payLoan",
    payload: initialState,
  };
}
