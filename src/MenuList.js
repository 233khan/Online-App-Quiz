// src/MenuList.js

import React from "react";

const MenuItem = ({ name, link }) => (
  <li>
    <a href={link}>{name}</a>
  </li>
);

const MenuList = ({ items }) => (
  <ul>
    {items.map((item) => (
      <MenuItem key={item.id} name={item.name} link={item.link} />
    ))}
  </ul>
);

export default MenuList;
