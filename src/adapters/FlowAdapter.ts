import { TCallSmartContractParams } from '@/types/param';
import { IBlockchainAdapter } from '../interfaces/BlockchainWalletAdapter';

export class FlowAdapter implements IBlockchainAdapter {
  async connectWallet(): Promise<void> {
    // TODO: Implement Flow wallet connection logic here
  }

  async disconnectWallet(): Promise<void> {
    // TODO: Implement Flow wallet disconnection logic here
  }

  async callSmartContract(
    contractAddress: string,
    method: string,
    ...params: TCallSmartContractParams[]
  ): Promise<any> {
    // TODO: Implement Flow smart contract interaction here
  }
}
