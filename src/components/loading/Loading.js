const Loading = () => {
  let loadingUrl = "https://i.imgur.com/543oiSR.gif";

  return (
    <section className="loading">
      <img src={loadingUrl} alt="loading" />
      <h2>LOADING</h2>
    </section>
  );
};

export default Loading;
