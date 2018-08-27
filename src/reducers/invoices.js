const invoicesReducerDefaultState = [];

const InvoicesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INVOICE':
      return [...state, action.invoice];
    case 'EDIT_INVOICE':
      return state.map((invoice) => {
        if (invoice.id === action.id) {
          return {
            ...invoice,
            ...action.updates
          }
        }
        else {
          return invoice;
        }
      });
    case 'REMOVE_INVOICE':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
}

export default InvoicesReducer;