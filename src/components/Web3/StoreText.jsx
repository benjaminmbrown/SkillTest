import { useState } from "react";
export const StoreText = () => {
  const [Text, SetText] = useState({
    text: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    SetText({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("test");
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="h1">Balance Inputs</div>
        <div className="form-row">
          <label htmlFor="text" className="form-label">
            Store Text to IPFS
          </label>
          <input
            type="text"
            className="form-input"
            id="text"
            name="text"
            value={Text.text}
            onChange={handleChange}
          />
        </div>
    

        <button type="submit" className="btn btn-block">
        Store Text Now
        </button>
      </form>
    </div>
  );
};
export default StoreText;
