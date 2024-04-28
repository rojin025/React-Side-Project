import { actionType } from "../../Types/types";

interface Customer {
  fullName: string;
  nationalID: number;
  createdAt: string;
}

interface actionCustomer {
  type: string;
  payload: Customer;
}

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export default function customerReducer(
  state = initialState,
  action: actionCustomer
) {
  const { type, payload } = action;
  switch (type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: payload.fullName,
        nationalID: payload.nationalID,
        createdAt: payload.createdAt,
      };

    case "customer/updateName":
      return { ...state, fullName: payload.fullName };
    default:
      return state;
  }
}

export function createCustomer(fullName: string, nationalID: number) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName: string) {
  return { type: "customer/updateName", payload: fullName };
}
