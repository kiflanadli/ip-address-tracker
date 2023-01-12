import Outputs from "./Outputs";

export default function Header() {
  return (
    <header>
      <h1>Ip Address Tracker</h1>

      <div>
        <input placeholder="Search for any IP address or domain"></input>
        <button>
          <img src="/images/icon-arrow.svg" alt="search button" />
        </button>
      </div>

      <div>
        <Outputs />
        <hr />
      </div>
    </header>
  );
}
