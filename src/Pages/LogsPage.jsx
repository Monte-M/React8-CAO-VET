import css from "./LogsPage.module.css";
import OrangeBtn from "../components/OrangeBtn";
import WhiteBtn from "../components/WhiteBtn";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Log from "../components/Log";
import Prescription from "../components/Prescription";

function LogsPage() {
  const { id } = useParams();
  const [pet, setPet] = useState([]);
  const [logs, setLogs] = useState([]);
  const [pres, setPres] = useState([]);
  const [showPres, setShowPres] = useState(true);
  const [showLogs, setShowLogs] = useState(true);

  const getPet = async () => {
    const resp = await fetch(`http://localhost:4000/v1/pets/${id}`);
    const data = await resp.json();
    setPet(data.result);
  };
  const getLogs = async () => {
    const resp = await fetch(`http://localhost:4000/v1/logs/${id}`);
    const data = await resp.json();
    setLogs(data.result);
  };
  const getPres = async () => {
    const resp = await fetch(`http://localhost:4000/v1/pres/${id}`);
    const data = await resp.json();
    setPres(data.result);
  };

  console.log(pres);

  useEffect(() => {
    getPet();
    getLogs();
    getPres();
  }, []);

  const displayPres = () => {
    setShowPres(!showPres);
  };

  const displayLogs = () => {
    setShowLogs(!showLogs);
  };

  const petName = pet && <h1>{pet[0]?.name}: Health Records</h1>;

  return (
    <div className='container'>
      <div className={css.addPrescription}>
        {petName}
        <div className={css.topButtons}>
          <OrangeBtn title='ADD PRESCRIPTION' />
          <WhiteBtn title='ADD LOG' />
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
    </div>
  );
}

export default LogsPage;
