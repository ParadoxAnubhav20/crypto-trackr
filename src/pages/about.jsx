const AboutPage = () => {
  return (
    <div className="about">
      <h1>About CryptoTrackr</h1>
      <p>
        CryptoTrackr is a React application that shows live cryptocurrency data
        with the help of the CoinGecko API.
      </p>
      <p>
        It allows you to view the top cryptocurrencies by market cap, search by
        name or symbol, and organize them by price, market cap, or 24-hour
        change.
      </p>
      <p>
        This project was created to practice working with React, including
        components, hooks, state management, and connecting to external APIs.
      </p>
      <p>
        🚀 Future updates may include more detailed coin information, the option
        to save favorites, pagination, and other improvements.
      </p>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} CryptoTrackr. Built with React &
          CoinGecko API.
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;
