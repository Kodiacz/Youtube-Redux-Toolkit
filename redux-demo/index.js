const redux = require("redux");

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

const initialState = {
  numOfCakes: 10,
  anotherProperty: 0,
};

// (previousState, action) => newState;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        // in order to keep old values that are not ment to be changed we use the spread operator
        // (...state => makes a coy of the old state)
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const store = redux.createStore(reducer);

console.log(`Initial state => ${store.getState().numOfCakes}`);

const unsubscibe = store.subscribe(() =>
  console.log(`update state ${store.getState().numOfCakes}`)
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(7));
unsubscibe();

console.log(`Initial state => ${store.getState().numOfCakes}`);
