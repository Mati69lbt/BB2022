import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage.js";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
