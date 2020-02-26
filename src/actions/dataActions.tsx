import * as type from "../constants/ActionTypes";

export const fetchDataBegin = () => ({
  type: type.FETCH_DATA_BEGIN
});

export const fetchDataSuccess = (data: any) => ({
  type: type.FETCH_DATA_SUCCESS,
  payload: { data }
});

export const fetchDataFail = (error: any) => ({
  type: type.FETCH_DATA_FAIL,
  payload: { error }
});

export function fetchData() {
  return (dispatch: any) => {
    dispatch(fetchDataBegin());
    return fetch("http://localhost:3000/data")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        console.log(json, "check json");
        dispatch(fetchDataSuccess(json));
        return json;
      })
      .catch(err => dispatch(fetchDataFail(err)));
  };
}

const handleErrors = (res: any) => {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res;
};
