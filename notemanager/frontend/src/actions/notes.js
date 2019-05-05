import axios from "axios";

import { GET_NOTES, DELETE_NOTEs } from "./types";

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
    .then(res => {
      dispatch({
        type: DELETE_NOTE,
        payload: is
      });
    })
    .catch(err => console.log(err));
};
