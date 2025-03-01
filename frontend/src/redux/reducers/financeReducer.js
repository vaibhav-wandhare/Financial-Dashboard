const initialState = { accountBalance: 0, transactions: [], notifications: [] };

export default function financeReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_FINANCIAL_DATA":
      console.log("✅ Updating Redux Store with:", action.payload);
      return {
        ...state,
        accountBalance: action.payload.balance || 0,
        transactions: action.payload.transactions || [],
        notifications: action.payload.notifications || [],
      };

    default:
      return state;
  }
}
