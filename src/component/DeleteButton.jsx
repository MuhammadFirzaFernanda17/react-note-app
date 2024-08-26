import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="material-symbols-outlined" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
}

export default DeleteButton;
