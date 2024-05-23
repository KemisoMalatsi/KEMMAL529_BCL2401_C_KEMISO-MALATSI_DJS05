const { reducer, initialState } = require('./reducer');

const createStore = (reducer, initialState) => {
    let state = initialState;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(i => i !== listener);
        };
    };

    return {
        getState,
        dispatch,
        subscribe
    };
};

const store = createStore(reducer, initialState);

module.exports = store;