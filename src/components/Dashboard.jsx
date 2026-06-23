import { useState } from "react";
import TemperatureCard from "./TemperatureCard";
import ConnectButton from "./ConnectButton";
import TemperatureGraph from "./TemperatureGraph";

function Dashboard() {

  const [temperature, setTemperature] = useState(0);
  const [history, setHistory] = useState([]);

  return (
    <div className="flex flex-col items-center">

      <h1 className="text-cyan-400 text-5xl font-bold mt-10">
        IoT Dashboard
      </h1>

      <ConnectButton
        setTemperature={setTemperature}
        setHistory={setHistory}
      />

      <TemperatureCard temperature={temperature} />

      <TemperatureGraph history={history} />

    </div>
  );
}

export default Dashboard;