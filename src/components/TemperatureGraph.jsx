import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

function TemperatureGraph({ history }) {

  return (

    <div className="mt-10 bg-white/10 p-5 rounded-3xl backdrop-blur-xl">

      <LineChart width={600} height={300} data={history}>

        <CartesianGrid stroke="#444" />

        <XAxis dataKey="time" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="temp"
          stroke="#22d3ee"
          strokeWidth={3}
        />

      </LineChart>

    </div>

  );

}

export default TemperatureGraph;