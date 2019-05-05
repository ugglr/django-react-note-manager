import axios from "axios";

import { GET_NOTES } from "./types";

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
