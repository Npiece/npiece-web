import {txObj, stringToByte} from "./transaction";
import {TransactionBlock} from "@mysten/sui.js";
import config from "./objects.json";
const network = "testnet"

export function setNickName(nft: string, nickName: string, payment: string) {
  const transaction = new TransactionBlock();
  const packageObjectId = config[network].package
  const moduleName = "user";
  const fun = "update_punk_name";
  const [txb, callResult] = txObj(
    {transaction, packageObjectId, moduleName, fun},
    (tx) => [
      tx.object(nft),
      tx.object(config[network].feetable_sui),
      tx.object(payment),
      tx.pure(stringToByte(nickName)),
    ],
    [config[network].gas_coin]
  );
  return {txb, callResult}
}

export function setBio(nft: string, bio: string, payment: string) {
  const transaction = new TransactionBlock();
  const packageObjectId = config[network].package
  const moduleName = "user";
  const fun = "update_punk_bio";
  const [txb, callResult] = txObj(
    {transaction, packageObjectId, moduleName, fun},
    (tx) => [
      tx.object(nft),
      tx.object(config[network].feetable_sui),
      tx.object(payment),
      tx.pure(stringToByte(bio)),
    ],
    [config[network].gas_coin]
  );
  return {txb, callResult}
}
