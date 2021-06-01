import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
