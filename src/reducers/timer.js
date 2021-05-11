const timerReducer = (state = 60000, action) => {
  switch (action.type) {
    case 'DECREMENT':
      // return state;
      return Math.max(state - 1000, 0);
    case 'RESET':
      return 60000;
    case 'ZERO_TIMER':
      return 0;
    default: return state;
  }
}

export default timerReducer;