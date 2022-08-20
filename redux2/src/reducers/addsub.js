const intialstate=10

const changethenumber = (state = intialstate, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "sub":
      return state - 1;
    default:
      return state;
  }
};

export default changethenumber;
