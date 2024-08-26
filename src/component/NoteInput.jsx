import React from "react";

const MAX_TITLE_LENGTH = 30;

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      error: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const title = event.target.value;

    if (title.length > MAX_TITLE_LENGTH) {
      this.setState({ error: `Title cannot exceed ${MAX_TITLE_LENGTH} characters` });
    } else {
      this.setState({ error: "" });
    }

    this.setState({ title });
  }

  onBodyChangeEventHandler(event) {
    this.setState({ body: event.target.value });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    const { title, body, error } = this.state;

    if (!error) {
      this.props.addNote({
        title,
        body,
      });
      this.setState({ title: "", body: "" });
    }
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <input type="text" className="note-input__title" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
        {this.state.error && <p style={{ color: "red", margin: 0 }}>{this.state.error}</p>}
        <textarea className="note-input__body" placeholder="Body" value={this.state.body} onChange={this.onBodyChangeEventHandler} required />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default NoteInput;
