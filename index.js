const store = require('./store');
const { addAction, substractAction, resetAction } = require('./action');

// initial state verification
console.log('initial state:', store.getState());

// Increase the counter
store.dispatch(addAction());
store.dispatch(addAction());
console.log('State after 2 ADD action:', store.getState());

// Decreament the counter
store.dispatch(substractAction());
console.log('State after SUBSTRACTION action:', store.getState());


// Reset the counter
store.dispatch(resetAction());
console.log('State after RESET action:', store.getState());