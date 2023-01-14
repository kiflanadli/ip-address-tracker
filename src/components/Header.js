import { useState } from "react";

export default function Header({ handleSearch }) {
  const [input, setInput] = useState("");
  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(input);
  }
  return (
    <header>
      <h1>IP Address Tracker</h1>

      <form onSubmit={handleSubmit} className="form-group">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          value={input}
          onChange={handleInput}
        />
        <button type="submit">
          <img src="/images/icon-arrow.svg" alt="search button" />
        </button>
      </form>
    </header>
  );
}
