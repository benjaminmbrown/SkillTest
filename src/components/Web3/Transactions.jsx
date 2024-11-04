import { TxLookup } from "./TxLookup";

export const Transactions = () => {
  return (
    <div>
      <p>
        The Challenge: Build an API endpoint that accepts a cryptocurrency
        address (Ethereum, for example). It should retrieve the last 5
        transactions for that address from a blockchain explorer API (e.g.,
        Etherscan) and store them in MongoDB. Allow users to query for
        transactions by address and date range
      </p>
      <br/>
      <TxLookup/>
    </div>
    
  );
};

export default Transactions;
