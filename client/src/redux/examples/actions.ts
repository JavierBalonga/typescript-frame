import { INCREMENT, DECREMENT } from "./constants";

export const exampleIncrement = () => {
  return {
    type: INCREMENT,
  };
};

export const exampleDecrement = () => {
  return {
    type: DECREMENT,
  };
};
