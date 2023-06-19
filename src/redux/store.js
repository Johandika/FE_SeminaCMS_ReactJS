import {
  combineReducers, // buat ngambil semua data(state) di reducernya
  legacy_createStore as createStore, // buat create store(redux)nya
  applyMiddleware, // buat log, ngecek kita pakai middleware apa
  compose,
} from "redux";

import thunk from "redux-thunk";
import authReducer from "./auth/reducer"; // biar bisa pakai state di mana aja , hrus di simpan di store
import categoriesReducer from "./categories/reducer";
import notifReducer from "./notif/reducer";
import talentsReducer from "./talents/reducer";
import paymentsReducer from "./payments/reducer";
import eventsReducer from "./events/reducer";
import listsReducer from "./lists/reducer";
import ordersReducer from "./orders/reducer";

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  notif: notifReducer,
  talents: talentsReducer,
  payments: paymentsReducer,
  events: eventsReducer,
  lists: listsReducer,
  orders: ordersReducer,
});
const store = createStore(rootReducers, composerEnhancer(applyMiddleware(thunk)));

export default store;
