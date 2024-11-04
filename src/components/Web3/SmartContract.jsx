import ScTransact from "../Web3/ScTransact";


export const SmartContract = () => {
  return (
    <div>
      <p>
        The Challenge: Create a pre-deployed simple ERC20 token contract on a
        testnet. Build an API endpoint that allows users to transfer tokens
        between wallets using the contract. The endpoint should update the
        MongoDB database with the latest transaction data.
      </p>
      <br/>
     <ScTransact/>
    </div>
  );
};

export default SmartContract;
