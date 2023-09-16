import { FlowAdapter } from '@/adapters/FlowAdapter';
import { SolanaAdapter } from '@/adapters/SolanaAdapter';
import { IBlockchainAdapter } from '@/interfaces/BlockchainWalletAdapter';
import { TProtocol } from '@/types/protocol';

export class AdapterFactory {
  static createAdapter(type: TProtocol): IBlockchainAdapter {
    switch (type) {
      case 'solana':
        return new SolanaAdapter();
      case 'flow':
        return new FlowAdapter();
      default:
        throw new Error(`Does not support ${type} type`);
    }
  }
}
