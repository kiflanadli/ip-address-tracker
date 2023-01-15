import { useEffect, useState } from "react";
import Header from "./components/Header";
import Outputs from "./components/Outputs";
import Maps from "./components/Maps";
import useAxiosGet from "./hooks/HttpRequests";
import "./styles/ip-section.scss";

function App() {
  const [input, setInput] = useState("");
  const handleSearch = (value) => setInput(value);

  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_1Xtc0uUHqQCcBsS6UNLaHhNjJ2SeO&ipAddress=${input}&domain=${input}`;
  const output = useAxiosGet(url);

  // cache first loaded data (client's ip data)
  useEffect(() => {
    if (!sessionStorage) {
      console.log("doesn't support web storage");
      return;
    }
    const localData = sessionStorage.getItem("data");
    if (input === "" && output.data && !localData)
      sessionStorage.setItem("data", JSON.stringify(output.data));
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
