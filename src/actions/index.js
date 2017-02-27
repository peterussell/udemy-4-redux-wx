import axios from 'axios';

const API_KEY = 'c162707190fa0209dbc4d457d846731b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Recall: an Action is a function which returns an object, and that
// object must always have a 'type' property.

// Rather than using a string for the action type, we assign and export
// it, so it remains consistent across the project.
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // Returns a promise called request.

  return {
    type: FETCH_WEATHER,
    payload: request // Request is a promise.
  };
}

/* Redux-Promise:
   Redux-Promise is a middleware. Recall that a middleware catches an
   Action after it's created by the Action Creator, and before it gets
   to any Reducers.

   When the middleware receives the Action, it can
   stop it, modify it, or pass it on unchanged.

   In the case of Redux-Promise, it looks specifically at the 'payload'
   property. If the payload is a *promise*, it stops the Action entirely
   and waits for the request to finish. At that point, it **dispatches
   a *new* action of the same type, with the payload of the completed
   request**, and sends the Action with completed Request/Response to
   the Reducers.

   This prevents us from having to loop and check whether the request
   has finished (promise has resolved), and handles all the tricky stuff
   that goes along with it.

   NB. if the Action does *not* have a 'payload' property, or the payload
   is not a promise, then Redux-Promise will just let the Action flow
   through to the Reducers without impeding it further.

   NB. (2) - to see this in action, add a console.log(request) in the
   fetchWeather Action Creator (above), and another console.log(action)
   inside the reducer_weather.js Reducer. In the first, you'll see the
   request is a Promise object, in the second you'll see the Action
   payload is no longer a promise, but an object containing the HTTP
   response data. */
