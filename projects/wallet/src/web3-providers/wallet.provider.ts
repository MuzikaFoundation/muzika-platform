import * as ProviderEngine from 'web3-provider-engine';
import * as FiltersSubprovider from 'web3-provider-engine/subproviders/filters';
import * as WalletSubprovider from 'web3-provider-engine/subproviders/wallet';
import * as RpcSubprovider from 'web3-provider-engine/subproviders/rpc';
import {Provider as Web3Provider} from '@0xproject/types';
import * as Wallet from 'ethereumjs-wallet-browser';
import {environment} from '../environments/environment';
import {Buffer} from 'safe-buffer';

export class WalletProvider implements Web3Provider {
  private engine: ProviderEngine;

  constructor(walletKey: string | {input: string, password: string},
              providerUrl?: string) {
    let wallet: Wallet;
    if (typeof walletKey === 'string') {
      wallet = Wallet.fromPrivateKey(Buffer.from(walletKey, 'hex'));
    } else {
      wallet = Wallet.fromV3(walletKey.input, walletKey.password, true);
    }

    const rpcProvider = new RpcSubprovider({
      rpcUrl: providerUrl || `http://${environment.rpc.host}:${environment.rpc.port}`
    });

    this.engine = new ProviderEngine();
    this.engine.addProvider(new WalletSubprovider(wallet, {}));
    this.engine.addProvider(new FiltersSubprovider());
    this.engine.addProvider(rpcProvider);
    this.engine.start(); // Required by the provider engine.
  }

  sendAsync(...args) {
    this.engine.sendAsync.apply(this.engine, args);
  }

  send(...args): any {
    return this.engine.send.apply(this.engine, args);
  }
}
