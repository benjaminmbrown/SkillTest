import { BalanceLookup } from "./BalanceLookup";

export const Balance = () => {
  return (
    <div>
      <p>
        The Challenge: Build an API endpoint that accepts a token contract
        address and a wallet address. It should query the blockchain (using
        web3.js) to retrieve the balance of the specified token held by the
        wallet address and return the balance.re
      </p>
      <br />
      <BalanceLookup />
    </div>
  );
};

export default Balance;
