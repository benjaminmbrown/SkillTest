import StoreText from "../Web3/StoreText";
export const Storage = () => {
  return (
    <div>
      <p>
        The Challenge: Create an API endpoint that allows users to store text
        data on IPFS using the IPFS API. The endpoint should store the IPFS hash
        of the data in MongoDB and provide a way for users to retrieve the data
        using the stored hash.
      </p>
      <br />
      <StoreText />
    </div>
  );
};

export default Storage;
