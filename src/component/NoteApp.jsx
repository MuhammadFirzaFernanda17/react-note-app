import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import Navbar from "./Navbar";
import { getInitialData, showFormattedDate } from "../utils/index";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchQuery: "",
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleDelete(id) {
    const newNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: newNotes });
  }

  handleArchive(id) {
    const newNotes = this.state.notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note));
    this.setState({ notes: newNotes });
  }

  onAddNoteHandler({ title, body }) {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
    }));
  }

  handleSearchChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()));
    const activeNotes = filteredNotes.filter((note) => !note.archived);
    const archivedNotes = filteredNotes.filter((note) => note.archived);

    return (
      <div className="note-app">
        <Navbar searchQuery={this.state.searchQuery} onSearchChange={this.handleSearchChange} />
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        <NoteList notes={activeNotes} onDelete={this.handleDelete} onArchive={this.handleArchive} />
        <h2>Catatan yang Diarsip</h2>
        <NoteList notes={archivedNotes} onDelete={this.handleDelete} onArchive={this.handleArchive} />
      </div>
    );
  }
}

export default NoteApp;
