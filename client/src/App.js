import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CharacterCreate from "./components/CharacterCreate";
import LandingPage from "./components/LandingPage.js";
import Detail from "./components/Detail";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/character" component={CharacterCreate} />
          <Route path="/details/:id" component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
