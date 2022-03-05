import { Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import Products from "./components/Products";

function App() {
  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <Route path="/welcome">
        <Welcome></Welcome>
      </Route>

      <Route path="/welcome">
        <Products></Products>
      </Route>
    </div>
  );
}

export default App;
