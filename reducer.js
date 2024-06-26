const initialState =  { count: 0 };

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return { count: state.count + 1 };
        case 'SUBSTRACT':
            return { count: state.count -1 }
        case 'RESET':
            return { count: 0 };
        default:
            return state; 
    }
};

module.exports = { initialState, reducer };