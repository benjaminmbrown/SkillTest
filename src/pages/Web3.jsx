import { ChevronRight, ChevronLeft } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Tabs } from "../components/Tabs";
import { NFT } from "../components/Web3/Nft";
import { Storage } from "../components/Web3/Storage";
import { Balance } from "../components/Web3/Balance";
import { SmartContract } from "../components/Web3/SmartContract";
import { Transactions } from "../components/Web3/Transactions";

export const MyWeb3 = () => {
  return (
    <div>
      <Tabs items={items} />
    </div>
  );
};

export default MyWeb3;

const items = [
  {
    title: "NFT",
    content: (
      <div className="border-2 rounded-lg p-1">
        <h1 className="text-3xl ">NFT</h1>

        <NFT />
      </div>
    ),
  },
  {
    title: "Txs",
    content: (
      <div className="border-2 rounded-lg p-4">
        <h1 className="text-3xl ">Tx Tracking</h1>
       <Transactions/>
      </div>
    ),
  },
  {
    title: "Storage",
    content: (
      <div className="border-2 rounded-lg p-4">
        <h1 className="text-3xl ">Storage</h1>
      <Storage/>
      </div>
    ),
  },
  {
    title: "Balances",
    content: (
      <div className="border-2 rounded-lg p-4">
        <h1 className="text-3xl ">Token Balance</h1>
     <Balance/>
      </div>
    ),
  },
  {
    title: "SC",
    content: (
      <div className="border-2 rounded-lg p-4">
        <h1 className="text-3xl ">Smart Contract</h1>
      <SmartContract/>
      </div>
    ),
  },
];
