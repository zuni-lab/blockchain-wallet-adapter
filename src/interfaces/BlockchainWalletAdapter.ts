import { TCallSmartContractParams } from "@/types/param";

export interface IBlockchainAdapter {
  connectWallet(): Promise<void>;
  disconnectWallet(): Promise<void>;
  callSmartContract(contractAddress: string, method: string, ...params: TCallSmartContractParams[]): Promise<any>;
}
