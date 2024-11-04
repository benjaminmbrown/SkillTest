import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detailed from "./pages/Detailed.jsx";
import Trading from "./pages/Trading.jsx";
import Sidebar from "./components/Sidebar";
import Web3 from "./pages/Web3.jsx";
import { SidebarItem } from "./components/Sidebar";
import { UserCircle, LayoutDashboard, BitcoinIcon } from "lucide-react";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";

const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  appName: "Web3-react Demo",
  supportedChainIds: [1, 3, 4, 5, 42],
});

const WalletConnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

function App() {
  const { activate, deactivate } = useWeb3React();
  const { active, chainId, account } = useWeb3React();
  return (
    <Router>
      <div className="flex">
        <Sidebar>
          <SidebarItem
            to="/"
            icon={<LayoutDashboard size={20} />}
            text="Home"
          />
          <SidebarItem
            icon={<UserCircle size={20} />}
            text="Trading"
            to="/Trading"
          />
          <SidebarItem
            icon={<BitcoinIcon size={20} />}
            text="Web3"
            to="/Web3"
          />
          <hr className="my-3" />
        </Sidebar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/page/:pageNumber" element={<Home />}></Route>
          <Route path="/categories" element={<Home />}></Route>
          <Route path="/Trading" element={<Trading />}></Route>
          <Route path="/Web3" element={<Web3 />}></Route>
          <Route path="/:id" element={<Detailed />}></Route>
        </Routes>
        <button
          onClick={() => {
            activate(CoinbaseWallet);
          }}
        >
          Coinbase Wallet
        </button>
        <button
          onClick={() => {
            activate(WalletConnect);
          }}
        >
          Wallet Connect
        </button>
        <button
          onClick={() => {
            activate(Injected);
          }}
        >
          Metamask
        </button>

        <button onClick={deactivate}>Disconnect</button>
        <div>Connection Status: {active}</div>
        <div>Account: {account}</div>
        <div>Network ID: {chainId}</div>
      </div>
    </Router>
  );
}

export default App;
