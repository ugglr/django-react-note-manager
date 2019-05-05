import axios from "axios";

import { GET_NOTES, DELETE_NOTE, ADD_NOTE } from "./types";

//GET NOTES
export const getNotes = () => dispatch => {
  axios
    .get("/api/notes/")
    .then(res => {
      dispatch({
        type: GET_NOTES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//DELETE NOTE
export const deleteNote = id => dispatch => {
  axios
    .delete(`/api/notes/${id}/`)
    .then(() => {
      dispatch({
        type: DELETE_NOTE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//ADD NOTE
export const addNote = note => dispatch => {
  axios
    .post("/api/notes/", note)
    .then(res => {
      dispatch({
        type: ADD_NOTE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
