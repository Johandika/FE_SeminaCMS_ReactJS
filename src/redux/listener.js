// Fungsi file listener.js ini adalah pas projectnya di reload dia bakal ngecek tokennya ada gak di dalam local storage, kalau gak ada maka dia akan null in tapi kalau ada dia bakal set ke dalam reduxnya. Intinya untuk menghandle local storage
import store from "./store";

let currentAuth;

function listener() {
  let previousAuth = currentAuth;

  currentAuth = store.getState().auth;

  if (currentAuth !== previousAuth) {
    localStorage.setItem("auth", JSON.stringify(currentAuth));
  }
}

function listen() {
  store.subscribe(listener);
}

export { listen };
