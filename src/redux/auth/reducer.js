import { USER_LOGIN, USER_LOGOUT } from "./constants";

// Semua state di kelola di dalam reducer
// initialState adalah data auth yang diget, datanya berupa string sehingga di parse jadi JSON.
let initialState = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : { token: null, role: null };

// action pada argument di bawah adalah action dari file ./action.js
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        token: action.token,
        role: action.role,
      };

    case USER_LOGOUT:
      return { token: null, role: null };

    default:
      return state;
  }
}
