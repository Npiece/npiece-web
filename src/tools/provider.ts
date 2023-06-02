import {JsonRpcProvider, testnetConnection} from "@mysten/sui.js";
// import config from "./objects.json";
// const network = "testnet"

const provider = new JsonRpcProvider(testnetConnection);

export function getProvider() {
  return provider;
}