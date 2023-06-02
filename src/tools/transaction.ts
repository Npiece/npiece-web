import {TransactionArgument, TransactionBlock, bcs} from "@mysten/sui.js";

export type BuildTxParams = {
  transaction?: TransactionBlock;
  packageObjectId: string;
  moduleName: string;
  fun: string;
};

export type TransactionResult = TransactionArgument & TransactionArgument[];

export type TransactionBlockArgument = {
  kind: "Input";
  index: number;
  type?: "object" | "pure" | undefined;
  value?: unknown;
};

export function txObj(
  p: BuildTxParams,
  args: (
    tx: TransactionBlock
  ) => (TransactionBlockArgument | TransactionResult)[],
  tArgs: string[]
): [TransactionBlock, TransactionResult] {
  const tx = p.transaction ?? new TransactionBlock();

  const callResult = tx.moveCall({
    target: `${p.packageObjectId}::${p.moduleName}::${p.fun}`,
    typeArguments: tArgs,
    arguments: args(tx),
  });

  return [tx, callResult];
}

export function encodeUtf8ToBytes(text: string): Uint8Array {
  const encoder = new TextEncoder();
  const encodedText = encoder.encode(text);
  return encodedText;
}

export function decodeBytesToUtf8(bytes: Uint8Array): string {
  const decoder = new TextDecoder();
  const decodedText = decoder.decode(bytes);
  return decodedText;
}

export function stringToByte(data: string): unknown {
  return bcs.ser("vector<8>", encodeUtf8ToBytes(data));
}