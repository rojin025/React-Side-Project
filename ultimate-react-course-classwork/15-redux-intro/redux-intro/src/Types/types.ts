export interface state {
  balance: number;
  loan: number;
  loanPurpose: string;
}

export interface actionType {
  type: string;
  payload: state;
}
