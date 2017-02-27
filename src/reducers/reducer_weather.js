import { FETCH_WEATHER } from '../actions/index';

// Recall: reducers are just functions which take the particular
// piece of state this Reducer's responsible for, an action, and
// return a new value for that piece of state.

// We make sure this Reducer gets called by adding it to
// reducers/index.js
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // Recall: we should never modify existing state, we should only
      // create new state and return that new state. So something like
      // state.push(action.payload.data) is BAD - we never mutate state
      // directly.
      // Because we want to collect each city that gets searched for,
      // we want create a new array which contains all the old weather
      // data, as well as the new weather data, and then assign this
      // to the state we return.
      // Non-ES6, we could use state.concat([action.payload.data]);
      // In ES6, we can use the 'spread' operator:
      return [ action.payload.data, ...state ];
      // Results in [city,city,city] - NOT [city,[city,city]]

      // Also note that we can switch whether the new data goes at the
      // head of the array:
      //  > [ action.payload.data, ...state ];
      // Or the tail of the array:
      //  > [ ..state, action.payload.data ];
  }
  return state;
}
