import css from "./LogsPage.module.css";
import OrangeBtn from "../components/OrangeBtn";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Log from "../components/Log";
import Prescription from "../components/Prescription";
import AddPresForm from "../components/UI/AddPresForm";
import AddLogForm from "../components/UI/AddLogForm";

const beURL = process.env.REACT_APP_BE_API;

function LogsPage() {
  const { id } = useParams();
  const [pet, setPet] = useState([]);
  const [logs, setLogs] = useState([]);
  const [pres, setPres] = useState([]);
  const [showPres, setShowPres] = useState(true);
  const [showLogs, setShowLogs] = useState(true);
  const [showPresForm, setShowPresForm] = useState(false);
  const [showLogsForm, setShowLogsForm] = useState(false);

  const getPet = async () => {
    const resp = await fetch(`${beURL}/v1/pets/${id}`);
    const data = await resp.json();
    setPet(data.result);
  };
  const getLogs = async () => {
    const resp = await fetch(`${beURL}/v1/logs/${id}`);
    const data = await resp.json();
    setLogs(data.result);
  };
  const getPres = async () => {
    const resp = await fetch(`${beURL}/v1/pres/${id}`);
    const data = await resp.json();
    setPres(data.result);
  };

  useEffect(() => {
    getPet();
    getLogs();
    getPres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayPres = () => {
    setShowPres(!showPres);
  };

  const displayLogs = () => {
    setShowLogs(!showLogs);
  };

  const displayPresForm = () => {
    if (showLogsForm) {
      setShowLogsForm(false);
    }
    setShowPresForm(!showPresForm);
  };

  const displayLogsForm = () => {
    if (showPresForm) {
      setShowPresForm(false);
    }
    setShowLogsForm(!showLogsForm);
  };

  const petName = pet && <h1>{pet[0]?.name}: Health Records</h1>;

  return (
    <div className='container'>
      <div className={css.addPrescription}>
        {petName}
        <div className={css.topButtons}>
          {showPresForm ? (
            <OrangeBtn title='ADD PRESCRIPTION' handleClick={displayPresForm} />
          ) : (
            <OrangeBtn
              title='ADD PRESCRIPTION'
              handleClick={displayPresForm}
              className='inActive'
            />
          )}
          {showLogsForm ? (
            <OrangeBtn title='ADD LOG' handleClick={displayLogsForm} />
          ) : (
            <OrangeBtn
              title='ADD LOG'
              handleClick={displayLogsForm}
              className='inActive'
            />
          )}
        </div>
      </div>
      <div className={css.displayButtons}>
        <h3>Display:</h3>
        {showLogs ? (
          <OrangeBtn title='LOGS ✓' handleClick={displayLogs} />
        ) : (
          <OrangeBtn
            title='LOGS'
            handleClick={displayLogs}
            className='inActive'
          />
        )}
        {showPres ? (
          <OrangeBtn title='PRESCRIPTIONS ✓' handleClick={displayPres} />
        ) : (
          <OrangeBtn
            title='PRESCRIPTIONS'
            handleClick={displayPres}
            className='inActive'
          />
        )}
      </div>
      <div className={css.logsContainer}>
        {showLogs &&
          logs.map(({ status, description, id }) => (
            <Log key={id} status={status} description={description} />
          ))}
        {showPres &&
          pres.map((pres, index) => (
            <Prescription key={index} pres={pres} presDate={pres.timestamp} />
          ))}
        {logs.length === 0 && pres.length === 0 && (
          <h2>This pet has no logs or prescriptions</h2>
        )}
      </div>
      {showPresForm && <AddPresForm id={id} />}
      {showLogsForm && <AddLogForm id={id} />}
    </div>
  );
}

export default LogsPage;
