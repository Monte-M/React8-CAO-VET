import { Route, Switch } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import AddPet from "./Pages/AddPet";
import LogsPage from "./Pages/LogsPage";
import MedsPage from "./Pages/MedsPage";
import PetsPage from "./Pages/PetsPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Switch>
        <Route exact path='/'>
          <PetsPage />
        </Route>
        <Route path='/meds'>
          <MedsPage />
        </Route>
        <Route path='/addPet'>
          <AddPet />
        </Route>
        <Route path='/logs/:id'>
          <LogsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
