import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {WalletKitProvider} from "@mysten/wallet-kit";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <WalletKitProvider>
      <App />
    </WalletKitProvider>
  </StrictMode>
);
