import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <p class="top-right">Hours: Monday-Friday from 10am - 7:30pm</p>

      <h1>
        Welcome to <i>Coco's</i>!
      </h1>
      <h2>
        <i>About us</i>
      </h2>
      <p>
        We create a new menu each week with daily specials including a main
        dish, vegetables, sides, salads, and desserts. Or menu will be posted in
        advance each week. You can call or message us to place an order and then
        either eat in, or take home. We also cater and host parties.
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
