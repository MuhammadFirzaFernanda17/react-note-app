import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  if (notes.length === 0) {
    return <p className="empty-note">Tidak ada catatan</p>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} title={note.title} body={note.body} createdAt={note.createdAt} onDelete={onDelete} onArchive={onArchive} isArchived={note.archived} />
      ))}
    </div>
  );
}

export default NoteList;
