import { TCallSmartContractParams } from '@/types/param';
import { IBlockchainAdapter } from '../interfaces/BlockchainWalletAdapter';

export class SolanaAdapter implements IBlockchainAdapter {
  async connectWallet(): Promise<void> {
    // TODO: Implement Solana wallet connection logic here
  }

  async disconnectWallet(): Promise<void> {
    // TODO: Implement Solana wallet disconnection logic here
  }

  async callSmartContract(
    contractAddress: string,
    method: string,
    ...params: TCallSmartContractParams[]
  ): Promise<any> {
    // TODO: Implement Solana smart contract interaction here
  }
}
