import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ConnectionContext } from "../pages/_app";

const HARDHAT_NETWORK_ID = "31337";
const MANTLE_TESTNET_NETWORK_ID = "0x16d";

// This is an error code that indicates that the user canceled a transaction
const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

// create type
export type NavigationPageType = "create" | "marketplace" | "owned" | "/";

export default function Header() {
  const { connected, setConnected, address, setAddress } =
    useContext(ConnectionContext);
  const router = useRouter();

  const [page, setPage] = useState<NavigationPageType>();
  const onConnect = async () => {
    console.log("connecting");
    console.log(window.ethereum);
    try {
      // await window.ethereum.enable();
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length > 0) {
        const account = accounts[0];
        setConnected(true);
        setAddress(account);
        return;
      } else {
        console.log("no accounts");
      }
    } catch (e) {
      console.log(e);
    }

    if (!checkNetwork()) {
      alert("Please switch to Mantle Mainnet/Testnet");
      return;
    }
  };

  const checkNetwork = () => {
    if (window.ethereum.networkVersion === HARDHAT_NETWORK_ID) {
      return true;
    }

    if (
      window.ethereum.networkVersion === MANTLE_TESTNET_NETWORK_ID
    ) {
      return true;
    }
    return false;
  };

  const get_page = (): NavigationPageType => {
    switch (router.asPath) {
      case "/create":
        return "create";
      case "/marketplace":
        return "marketplace";
      case "/owned":
        return "owned";
      default:
        return "/";
    }
  };

  useEffect(() => {
    const page = get_page();
    if (page) {
      setPage(page);
    }
  }, [router.asPath]);

  return (
    <div className="sticky top-0 z-10 flex justify-center mb-3 bg-[#100a25] ">
      <div className="justify-self-center flex justify-between items-center px-6 sm:px-12 py-3	w-full max-w-screen-xl">
        <div className="flex items-center text-2xl">
          <Link href="/" legacyBehavior>
            <div>
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-2 py-2 rounded-lg">M</span>MantleAI
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-4 md:gap-8 text-lg">
          <Link href="marketplace">
            <div
              className={
                page === "marketplace"
                  ? "border-b-4 border-blue-400"
                  : "border-b-4 border-gray-900"
              }
            >
              Marketplace
            </div>
          </Link>
          <Link href="/create">
            <div
              className={
                page === "create"
                  ? "border-b-4 border-blue-400"
                  : "border-b-4 border-gray-900"
              }
            >
              Create
            </div>
          </Link>
          <Link href="owned">
            <div
              className={
                page === "owned"
                  ? "border-b-4 border-blue-400"
                  : "border-b-4 border-gray-900"
              }
            >
              Owned
            </div>
          </Link>
          {connected ? (
            <div className="border border-white-500 text-white-500 text-base font-semibold py-2 px-4 rounded-lg bg-white text-black">
              {address.slice(0, 4) + "..." + address.slice(-4)}
            </div>
          ) : (
            <button
              className="border border-white-500 text-white-500 text-base font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-black"
              onClick={onConnect}
            >
              Connect
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
