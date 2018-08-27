import uuid from 'uuid';

export const addInvoice = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_INVOICE',
  invoice: {
    id: uuid(),
    description,
    note,
    createdAt,
    amount
  }
})

// export const editInvoice = (id, updates) => ({
//   type: 'EDIT_INVOICE',
//   id,
//   updates
// })


export const editInvoice = (id, updates) => {
  return {
    type: 'EDIT_INVOICE',
    id,
    updates
  }
}


export const removeInvoice = ({ id }) => ({
  type: 'REMOVE_INVOICE',
  id
});