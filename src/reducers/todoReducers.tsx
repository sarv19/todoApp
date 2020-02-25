import {
  ADD_TODO,
  MARK_TODO,
  DELETE_TODO,
  MARK_ALL,
  CLEAR_MARK
} from "../constants/ActionTypes";

// let initialState: any;

const initialState = [
  {
    id: 0,
    name: "first reducer",
    check: false
  }
];

const todos = (state = initialState, action: any) => {
  // await fetchData();
  // state = initialState;
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.length === 0 ? 0 : state[0].id + 1,
          name: action.text,
          check: false
        },
        ...state
      ];

    case MARK_TODO:
      return state.map((todo: any) =>
        todo.id === action.id ? { ...todo, check: !todo.check } : todo
      );

    case DELETE_TODO:
      return state.filter((todo: any) => todo.id !== action.id);

    case MARK_ALL:
      const areAllMarked = state.every((todo: any) => todo.check);
      return state.map((todo: any) => ({ ...todo, check: !areAllMarked }));

    case CLEAR_MARK:
      // return state.filter(todo => todo.check === false);
      // const areAllMarked2 = state.every(todo => !todo.check);
      return state.map((todo: any) => ({ ...todo, check: false }));

    default:
      return state;
  }
};

export default todos;
