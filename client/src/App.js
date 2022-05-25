import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home";
import CharacterCreate from "./components/CharacterCreate";
import LandingPage from "./components/landingPage.js";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/character" component={CharacterCreate} />
          <Route path="/details/:id" component={Detail} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
