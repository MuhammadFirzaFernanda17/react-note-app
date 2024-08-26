import React from "react";
import NoteAction from "./NoteAction";

function NoteItem({ id, title, body, createdAt, onDelete, onArchive, isArchived }) {
  const formattedDate = new Date(createdAt).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="note-item">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{formattedDate}</p>
      <p className="note-item__body">{body}</p>
      <NoteAction id={id} onDelete={onDelete} onArchive={onArchive} isArchived={isArchived} />
    </div>
  );
}

export default NoteItem;
