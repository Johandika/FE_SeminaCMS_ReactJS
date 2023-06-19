import React from "react";
import { Nav } from "react-bootstrap";

function NavLink({ role, roles, action, children }) {
  let isHas = roles.indexOf(role); // hasilnya adalah -1(false) atau nilai index yang diakses(true) karena index of mengembalikan nilai index dari argumen role.
  return <>{isHas >= 0 && <Nav.Link onClick={action}>{children}</Nav.Link>}</>;
}

export default NavLink;
