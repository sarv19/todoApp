import {
  ADD_TODO,
  MARK_TODO,
  DELETE_TODO,
  MARK_ALL,
  CLEAR_MARK
} from "../constants/ActionTypes";

const initialState = [
  {
    id: 0,
    name: "first reducer",
    check: false
  }
];

export default function todos(state = initialState, action: any) {
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
      return state.map(todo =>
        todo.id === action.id ? { ...todo, check: !todo.check } : todo
      );

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case MARK_ALL:
      const areAllMarked = state.every(todo => todo.check);
      return state.map(todo => ({ ...todo, check: !areAllMarked }));

    case CLEAR_MARK:
      // return state.filter(todo => todo.check === false);
      // const areAllMarked2 = state.every(todo => !todo.check);
      return state.map(todo => ({ ...todo, check: false }));

    default:
      return state;
  }
}
