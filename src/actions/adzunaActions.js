import { START_FETCH, ERROR_FETCH, SUCCESS_FETCH, END_FETCH } from "./types";

// import history from "../hoc/history";
import adzunaApi from "../api/adzunaApi";
import { APP_ID, APP_KEY } from "../config/config";

export const fetchData = (what, where) => async (dispatch) => {
  dispatch({ type: START_FETCH });
  try {
    const response = await adzunaApi.get("/search/1", {
      params: {
        app_id: APP_ID,
        app_key: APP_KEY,
        what,
        where,
      },
    });
    const data = response.data;
    dispatch({ type: SUCCESS_FETCH, payload: data });
    // history.push("/jobs");
  } catch (err) {
    dispatch({ type: ERROR_FETCH, payload: err.message });
  }
  dispatch({ type: END_FETCH });
};
