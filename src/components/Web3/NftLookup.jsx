import { useState } from "react";
export const NftLookup = () => {
  const [NFT, setNFT] = useState({
    address: "",
    tokenId: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    setNFT({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("test");
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>NFT Inputs</h2>
        <div className="form-row">
          <label htmlFor="address" className="form-label">
            NFT Address
          </label>
          <input
            type="text"
            className="form-input"
            id="address"
            name="address"
            value={NFT.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="tokenId" className="form-label">
            NFT Token ID
          </label>
          <input
            type="number"
            className="form-input"
            id="tokenId"
            name="tokenId"
            value={NFT.tokenId}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          Get NFT Metadata
        </button>
      </form>
    </div>
  );
};
export default NftLookup;
