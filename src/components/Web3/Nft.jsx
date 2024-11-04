import {NftLookup} from './NftLookup';

export const NFT = () => {
  return (
    <div>
      <p>
        {" "}
        The Challenge: Create an API endpoint that accepts an NFT contract
        address and token ID. It should retrieve the metadata (name,
        description, image URL) from the blockchain using web3.js, store it in
        MongoDB, and return the metadata to the user.
      </p>
<br/>
            <NftLookup/>
    </div>
  );
};

export default NFT;
