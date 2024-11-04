import { useState } from "react";
export const BalanceLookup = () => {
  const [Account, setAccount] = useState({
    contractAddress: "",
    walletAddress: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    setAccount({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("test");
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="h1">Balance Inputs</div>
        <div className="form-row">
          <label htmlFor="contractAddress" className="form-label">
            Contract Address
          </label>
          <input
            type="text"
            className="form-input"
            id="contractAddress"
            name="contractAddress"
            value={Account.contractAddress}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="walletAddress" className="form-label">
            Wallet Address
          </label>
          <input
            type="number"
            className="form-input"
            id="walletAddress"
            name="walletAddress"
            value={Account.tokenId}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          Get Balance info
        </button>
      </form>
    </div>
  );
};
export default BalanceLookup;
