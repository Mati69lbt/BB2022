import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home";
import CharacterCreate from "./components/CharacterCreate";
import LandingPage from "./components/LandingPage.js";
import Detail from "./components/Detail";

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
