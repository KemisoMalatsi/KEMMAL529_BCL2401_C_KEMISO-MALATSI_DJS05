const ADD = 'ADD';
const SUBSTRACT = 'SUBSTRACT';
const RESET = 'RESET';


const addAction = () => ({ type : ADD });
const substractAction = () => ({ type: SUBSTRACT });
const resetAction = () => ({ type: RESET });

module.exports = { ADD, SUBSTRACT, RESET, addAction, substractAction, resetAction };