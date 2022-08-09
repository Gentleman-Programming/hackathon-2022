import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
const Welcome = lazy(() => import("views/Welcome"));
const Landing = lazy(() => import("views/HackathonLanding"));
const RickNMorty = lazy(() => import("views/RickNMorty"));

const viewStyles = {
  mainContainer: {
    width: "100%",
  },
};

function App() {
  return (
    <Suspense fallback={<div></div>}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/hackathon">
              <div style={viewStyles.mainContainer} className="fadeInRight">
                <Landing />
              </div>
            </Route>
            <Route exact path="/ricknmorty-challenge">
              <div style={viewStyles.mainContainer} className="fadeInRight">
                <RickNMorty />
              </div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
