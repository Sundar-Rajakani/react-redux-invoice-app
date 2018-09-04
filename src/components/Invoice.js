import React from 'react';
import { Link } from 'react-router-dom';

export const Invoice = ({ description, amount, createdAt, id, dispatch }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>

  </div>
);

export default Invoice;
