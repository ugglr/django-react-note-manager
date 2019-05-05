import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addNote } from "../../actions/notes";

export class Form extends Component {
  state = {
    title: "",
    body: ""
  };

  static propTypes = {
    addNote: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { title, body } = this.state;
    const note = { title, body };
    this.props.addNote(note);
  };

  render() {
    const { title, body } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Note</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>Body</label>
            <input
              className="form-control"
              type="text"
              name="body"
              onChange={this.onChange}
              value={body}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addNote }
)(Form);
