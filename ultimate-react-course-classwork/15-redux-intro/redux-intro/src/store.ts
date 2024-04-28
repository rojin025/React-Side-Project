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
function reducer(state = initialState, action: actionType) {
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
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}
