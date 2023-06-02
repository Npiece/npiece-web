import React from "react";
import {getProvider} from "./provider";
import config from "./objects.json";
import { PaginatedObjectsResponse } from "@mysten/sui.js";
const network = "testnet"

export async function isWhitelist() {
  console.log();
}

export async function fetchNftObjects(walletAddress: string): Promise<PaginatedObjectsResponse>{
  const NpunkType = config[network].nft_type;
  const provider = getProvider();
  const objects = await provider.getOwnedObjects({
    owner: walletAddress,
    filter: {
      MatchAll: [
        {StructType: NpunkType}
      ]
    }
  })
  return objects;
}

export async function isHolder(
  walletAddress: string,
  setHolder: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    const objects = await fetchNftObjects(walletAddress);

    if (objects.data.length > 0) {
      setHolder(true);
    } else {
      setHolder(false);
    }
  } catch (error) {
    console.error("Error checking the holder:", error);
  }
}

export async function getNftId(
  walletAddress: string
): Promise<string | undefined>{
  try {
    const objects = await fetchNftObjects(walletAddress);
    if (objects.data.length > 0) {
      return objects.data[0].data?.objectId
    } else {
      return undefined
    }
  } catch {
    return undefined
  }
}