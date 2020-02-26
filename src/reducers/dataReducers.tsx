import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL
} from "../constants/ActionTypes";

const initialState = {
  item: [],
  loading: false,
  error: null
};

export default function dataReducers(state = initialState, action2: any) {
  switch (action2.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action2.payload.data
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action2.payload.error,
        item: []
      };
    default:
      return state;
  }
}
