import React from "react";

import Genres from '../Genres/Genres';
import ShowsPage from "../ShowsPage/ShowsPage";

const Components = {
  showsPage: ShowsPage,
  genres: Genres,
};

export default block => {
  console.log('egfdnvcefvdcxc', block);
  if (typeof Components[block.item.component] !== "undefined") {
    return React.createElement(Components[block.item.component], {
      key: block.item.id,
      block: block.item
    });
  }
  return React.createElement(
    () => <div>The component {block.item.component} has not been created yet.</div>,
    { key: block.item.id }
  );
};