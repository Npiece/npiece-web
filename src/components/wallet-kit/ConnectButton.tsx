import {ComponentProps, ReactNode, useState} from "react";
import {Menu} from "@headlessui/react";
import {ConnectModal, useWalletKit} from "@mysten/wallet-kit";
import {formatAddress} from "@mysten/sui.js";
import {styled} from "styled-components";
import {CheckIcon, ChevronIcon} from "../../assets/Icons";

interface ConnectButtonProps extends ComponentProps<typeof Button> {
  connectText?: ReactNode;
  connectedText?: ReactNode;
}
interface ButtonProps {
  color?: string;
}

interface AccountProps {
  active?: boolean;
}

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  font-weight: bold;
  font-size: 1.2em;
  text-decoration: none;
  padding: 15px 24px;
  width: 160px;
  border-radius: 12px;
  background-color: ${({color}) =>
    color == "primary" ? "#2a2a2f" : color == "connected" ? "#fff" : "#2a2a2f"};
  color: ${({color}) =>
    color == "primary" ? "#fff" : color == "connected" ? "#000" : "#fff"};
  box-shadow: ${({color}) =>
    color == "primary"
      ? "0px 4px 12px rgba(0, 0, 0, 0.1)"
      : color == "connected"
      ? "0px 4px 12px rgba(0, 0, 0, 0.1)"
      : "none"};
  &:hover {
    background-color: #4a4a4f;
  }
`;

const MenuItems = styled(Menu.Items)`
  position: absolute;
  display: flex;
  right: 0;
  margin-top: 4px;
  width: 160px;
  max-height: 200;
  overflow: auto;
  border-radius: 12px;
  background-color: #fff;
  color: #000;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 4px;
  flex-direction: column;
  gap: 8px;
`;

const Account = styled.button<AccountProps>`
  border: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 8px;
  color: ${({active}) => (active ? "#000" : "#0a0a0a")};
  cursor: pointer;
  text-align: left;
  font-size: 1.2em;
  border-radius: 3;

  &:hover {
    color: #0a0a0a;
    background-color: #efefef;
  }
`;

export function ConnectButton({
  connectText = "Connect Wallet",
  connectedText,
  ...props
}: ConnectButtonProps) {
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const {currentAccount, accounts, selectAccount, disconnect} = useWalletKit();

  return (
    <>
      {currentAccount ? (
        <Menu
          as="div"
          style={{
            position: "relative",
            display: "inline-block",
          }}
        >
          <Menu.Button
            as={Button}
            color="connected"
            style={{
              display: "inline-flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            type="button"
          >
            {connectedText ?? formatAddress(currentAccount.address)}
            <ChevronIcon />
          </Menu.Button>

          <MenuItems>
            {accounts.map((account) => (
              <Menu.Item key={account.address}>
                <Account
                  active={account.address === currentAccount.address}
                  onClick={() => selectAccount(account)}
                >
                  {formatAddress(account.address)}

                  {account.address === currentAccount.address && <CheckIcon />}
                </Account>
              </Menu.Item>
            ))}

            <div
              style={{
                marginTop: 4,
                marginBottom: 4,
                height: 1,
                background: "#F3F6F8",
                flexShrink: 0,
              }}
            />

            <Menu.Item>
              <Account onClick={() => disconnect()}>Disconnect</Account>
            </Menu.Item>
          </MenuItems>
        </Menu>
      ) : (
        <Button
          color="primary"
          onClick={() => setConnectModalOpen(true)}
          type="button"
          {...props}
        >
          {connectText}
        </Button>
      )}

      {!currentAccount && (
        <ConnectModal
          open={connectModalOpen}
          onClose={() => setConnectModalOpen(false)}
        />
      )}
    </>
  );
}
