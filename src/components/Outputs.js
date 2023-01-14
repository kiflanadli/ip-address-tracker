export default function Outputs({ output }) {
  const { loading, data, error } = output;
  let content;
  if (loading) content = "loading...";
  if (error) {
    console.log(error);
    content = error.response ? error.response.data.messages : error.message;
  }
  if (data) {
    const { ip, location, isp } = data;
    content = (
      <>
        <OutputSection label="ip address" data={ip} />
        <hr className="line-section" />
        <OutputSection
          label="location"
          data={`${location.city}, ${location.region} ${location.postalCode}`}
        />
        <hr className="line-section" />
        <OutputSection label="timezone" data={`UTC ${location.timezone}`} />
        <hr className="line-section" />
        <OutputSection label="isp" data={isp} />
      </>
    );
  }
  return content;

  // return (
  //   <>
  //     <OutputSection label="ip address" data={"123.234.543.223"} />
  //     <hr className="line-section" />
  //     <OutputSection label="location" data="Jawa Barat, Bekasi" />
  //     <hr className="line-section" />
  //     <OutputSection label="timezone" data="UTC +07:00" />
  //     <hr className="line-section" />
  //     <OutputSection label="isp" data="Telkomsel Indonesia" />
  //   </>
  // );
}

function OutputSection({ label, data }) {
  return (
    <section>
      <h2>{label}</h2>
      <p>{data}</p>
    </section>
  );
}
