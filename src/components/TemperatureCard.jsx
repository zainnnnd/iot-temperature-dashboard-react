import { FaTemperatureHigh } from "react-icons/fa";

function TemperatureCard({ temperature }) {

  return (
    <div
      className="
      mt-10
      w-[350px]
      p-8
      bg-white/10
      backdrop-blur-xl
      rounded-3xl
      shadow-2xl
      text-center
      "
    >

      <FaTemperatureHigh
        className="text-red-400 text-7xl mx-auto"
      />

      <h1 className="text-white text-5xl mt-5">

        {temperature.toFixed(1)}°C

      </h1>

      <h2 className="text-gray-300 mt-4">

        {
          temperature < 30
            ? "❄️ Cool"
            : temperature < 40
              ? "🌤 Normal"
              : "🔥 Hot"
        }

      </h2>

    </div>
  );
}

export default TemperatureCard;