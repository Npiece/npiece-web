import "./NotConnected.scss";

const NotConnected = () => {
  return (
    <>
      <div className="connect-wallet-notice">
        <h2>Connect your wallet!</h2>
      </div>
      <div className="arrow-container">
        <div className="arrow-animation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-up"
          >
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </div>
      </div>
    </>
  );
};

export default NotConnected;
