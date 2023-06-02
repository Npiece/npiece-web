import {useEffect, useState} from "react";
import {useWalletKit} from "@mysten/wallet-kit";
import NftMint from "../components/npunks/NftMint";
import NotConnected from "../components/npunks/NotConnected";
import Dashboard from "../components/npunks/Dashboard";
import {isHolder} from "../tools/holder";
import "./Npunks.scss";

export function Npunks() {
  const {currentAccount} = useWalletKit();

  const [holder, setHolder] = useState<boolean>(false);

  useEffect(() => {
    if (currentAccount) {
      isHolder(currentAccount.address, setHolder);
    }
  }, [currentAccount]);

  return (
    <div className="page">
      {currentAccount ? (
        holder ? (
          <Dashboard />
        ) : (
          <NftMint className="npunk" />
        )
      ) : (
        <NotConnected />
      )}
    </div>
  );
}
