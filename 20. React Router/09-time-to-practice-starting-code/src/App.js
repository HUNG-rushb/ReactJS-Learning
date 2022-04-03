import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "../pages/AllQuotes";
import NewQuote from "../pages/AllQuotes";
import QuoteDetail from "../pages/AllQuotes";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes"></Redirect>
      </Route>

      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteID">
        <QuoteDetail />
      </Route>
      <Route path="/newquote">
        <NewQuote />
      </Route>

      <Route path="*">NotFound Page</Route>
    </Switch>
  );
}

export default App;
