import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getNotes } from "../../actions/notes";

export class Notes extends Component {
  static propTypes = {
    notes: PropTypes.array.isRequired
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
                  <button className="btn btn-danger btn-sm">Delete</button>
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
  { getNotes }
)(Notes);
