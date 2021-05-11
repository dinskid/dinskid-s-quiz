const appStateReducer = (state = 'READY', action) => {
  switch (action.type) {
    case 'START': return 'RUNNING';
    case 'END': return 'ENDED';
    case 'RESTART': return 'READY';
    default: return state
  }
}

export default appStateReducer;
