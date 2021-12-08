import { Route, Switch } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import AddPetPage from "./Pages/AddPetPage";
import LogsPage from "./Pages/LogsPage";
import MedsPage from "./Pages/MedsPage";
import PetsPage from "./Pages/PetsPage";
import { Toaster } from "react-hot-toast";
import AddPrescriptionPage from "./Pages/AddPrescriptionPet";
import AddMedForm from "./components/UI/AddMedForm";
import { ThemeContext } from "./store/themeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
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
            <AddPetPage />
          </Route>
          <Route path='/addMed'>
            <AddMedForm />
          </Route>
          <Route path='/addPres'>
            <AddPrescriptionPage />
          </Route>
          <Route path='/logs/:id'>
            <LogsPage />
          </Route>
        </Switch>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
