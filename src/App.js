import { Route, Switch } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import MedsPage from "./Pages/MedsPage";
import PetsPage from "./Pages/PetsPage";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/pets">
          <PetsPage />
        </Route>
        <Route path="/meds">
          <MedsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
