import { useState } from "react";
export const TxLookup = () => {
  const [Address, setAddress] = useState({
    address: ""
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    setAddress({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("test");
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="h1">Balance Inputs</div>
        <div className="form-row">
          <label htmlFor="address" className="form-label">
            Blockchain Address
          </label>
          <input
            type="text"
            className="form-input"
            id="address"
            name="address"
            value={Address.address}
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
export default TxLookup;
