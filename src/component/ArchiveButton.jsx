import React from "react";

function ArchiveButton({ id, onArchive, isArchived }) {
  return (
    <button className="material-symbols-outlined" onClick={() => onArchive(id)}>
      {isArchived ? "Unarchive" : "Archive"}
    </button>
  );
}

export default ArchiveButton;
