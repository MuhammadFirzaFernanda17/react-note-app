import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteAction({ id, onDelete, onArchive, isArchived, createdAt }) {
  return (
    <div className="note-item__actions">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} onArchive={onArchive} isArchived={isArchived} />
    </div>
  );
}

export default NoteAction;
