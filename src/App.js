import { Route, Switch } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import LogsPage from "./Pages/LogsPage";
import MedsPage from "./Pages/MedsPage";
import PetsPage from "./Pages/PetsPage";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <PetsPage />
        </Route>
        <Route path='/meds'>
          <MedsPage />
        </Route>
        <Route path='/logs/:id'>
          <LogsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
