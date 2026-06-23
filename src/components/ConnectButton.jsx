import { FaPlug } from "react-icons/fa";

function ConnectButton({ setTemperature, setHistory }) {

  async function connectArduino() {

    try {

      const port = await navigator.serial.requestPort();

      await port.open({ baudRate: 9600 });

      const decoder = new TextDecoderStream();

      const inputDone = port.readable.pipeTo(decoder.writable);

      const reader = decoder.readable.getReader();

      let buffer = "";

      alert("Arduino Connected Successfully");

      while (true) {

        const { value, done } = await reader.read();

        if (done) break;

        buffer += value;

        let lines = buffer.split("\n");

        buffer = lines.pop();

        for (let line of lines) {

          const temp = parseFloat(line.trim());

          if (!isNaN(temp)) {

            console.log("Temperature:", temp);

            setTemperature(temp);

            setHistory(prev => {

  const newHistory = [
    ...prev,
    {
      time: new Date().toLocaleTimeString(),
      temp: temp
    }
  ];

  if (newHistory.length > 10) {
    newHistory.shift();
  }

  return newHistory;
});

          }

        }

      }

    }

    catch (error) {

      console.log(error);

    }

  }

  return (

    <button
      onClick={connectArduino}
      className="
      mt-10
      bg-cyan-500
      px-8
      py-6
      rounded-2xl
      text-white
      shadow-[0_0_30px_cyan]
      hover:scale-105
      duration-300
      transition-all
      flex
      items-center
      gap-3
      "
    >

      <FaPlug />

      Connect Arduino

    </button>

  );

}

export default ConnectButton;