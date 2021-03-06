import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getNotes, deleteNote } from "../../actions/notes";

export class Notes extends Component {
  static propTypes = {
    notes: PropTypes.array.isRequired,
    getNotes: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <Fragment>
        <h2>Notes</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>body</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.notes.map(note => (
              <tr key={note.id}>
                <td>{note.id}</td>
                <td>{note.title}</td>
                <td>{note.body}</td>
                <td>
                  <button
                    onClick={this.props.deleteNote.bind(this, note.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes.notes
});

export default connect(
  mapStateToProps,
  { getNotes, deleteNote }
)(Notes);
