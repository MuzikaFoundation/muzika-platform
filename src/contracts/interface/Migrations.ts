/* GENERATED BY TYPECHAIN VER. 0.1.5-remake */
/* tslint:disable */

import * as contract from 'truffle-contract';
import { BigNumber } from 'bignumber.js';
import {
  EtherAddress,
  EtherInteger,
  ITxParams,
  RawAbiDefinition,
  TruffleContract,
  TruffleContractInstance,
  TxValue,
  promisify
} from '../typechain-runtime';
import BuiltContract from '../../../build/contracts/Migrations.json';

export interface IMigrations extends TruffleContractInstance {
  last_completed_migration(): Promise<BigNumber>;
  owner(): Promise<string>;

  setCompleted: {
    (completed: EtherInteger, txParams?: ITxParams): Promise<void>;
    sendTransaction: (
      completed: EtherInteger,
      txParams?: ITxParams
    ) => Promise<void>;
    call: (completed: EtherInteger, txParams?: ITxParams) => Promise<void>;
    request: (completed: EtherInteger) => Promise<string>;
    estimateGas: (completed: EtherInteger) => Promise<number>;
  };
  upgrade: {
    (new_address: EtherAddress, txParams?: ITxParams): Promise<void>;
    sendTransaction: (
      new_address: EtherAddress,
      txParams?: ITxParams
    ) => Promise<void>;
    call: (new_address: EtherAddress, txParams?: ITxParams) => Promise<void>;
    request: (new_address: EtherAddress) => Promise<string>;
    estimateGas: (new_address: EtherAddress) => Promise<number>;
  };
}

export const TruffleMigrations: () => TruffleContract<IMigrations> = () =>
  contract(BuiltContract);
