import { useEffect, useState } from "react";
import Header from "./components/Header";
import Outputs from "./components/Outputs";
import Maps from "./components/Maps";
import useAxiosGet from "./hooks/HttpRequests";
import "./styles/ip-section.scss";

function App() {
  const [input, setInput] = useState("");
  const handleSearch = (value) => setInput(value);

  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_sky8VeFQENaUN22Jf8beDQPhvka9Y&ipAddress=${input}&domain=${input}`;
  const output = useAxiosGet(url);

  // cache first loaded data (client's ip data)
  useEffect(() => {
    if (input === "" && output.data)
      localStorage.setItem("data", JSON.stringify(output.data));
  }, [input, output.data]);

  return (
    <>
      <section
        className="ip-section"
        style={{ backgroundImage: "url('/images/pattern-bg.png')" }}
      >
        <Header handleSearch={handleSearch} />
        <article className="output">
          <Outputs output={output} />
        </article>
      </section>

      <section>
        <Maps data={output.data} />
      </section>
    </>
  );
}

export default App;
