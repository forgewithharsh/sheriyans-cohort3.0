import React from "react";
let App = () => {

  let ui = React.createElement('div', {} , [
    React.createElement('h1', {}, 'hello'),
    React.createElement('h2', {}, 'bye'),
    React.createElement('h3', {}, 'vapus aao'),
  ])

  return ui;
};

export default App;
