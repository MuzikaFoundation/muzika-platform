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
import BuiltContract from '../../../build/contracts/MuzikaCoin.json';

export interface IMuzikaCoin extends TruffleContractInstance {
  mintingFinished(): Promise<boolean>;
  name(): Promise<string>;
  totalSupply(): Promise<BigNumber>;
  decimals(): Promise<BigNumber>;
  owner(): Promise<string>;
  symbol(): Promise<string>;
  balanceOf(_owner: EtherAddress): Promise<BigNumber>;
  allowance(_owner: EtherAddress, _spender: EtherAddress): Promise<BigNumber>;

  approve: {
    (
      _spender: EtherAddress,
      _value: EtherInteger,
      txParams?: ITxParams
    ): Promise<boolean>;
    sendTransaction: (
      _spender: EtherAddress,
      _value: EtherInteger,
      txParams?: ITxParams
    ) => Promise<boolean>;
    call: (
      _spender: EtherAddress,
      _value: EtherInteger,
      txParams?: ITxParams
    ) => Promise<boolean>;
    request: (_spender: EtherAddress, _value: EtherInteger) => Promise<string>;
    estimateGas: (
      _spender: EtherAddress,
      _value: EtherInteger
    ) => Promise<number>;
  };
  transferFrom: {
    (
      _from: EtherAddress,
      _to: EtherAddress,
      _value: EtherInteger,
      txParams?: ITxParams
    ): Promise<boolean>;
    sendTransaction: (
      _from: EtherAddress,
      _to: EtherAddress,
      _value: EtherInteger,
      txParams?: ITxParams
    ) => Promise<boolean>;
    call: (
      _from: EtherAddress,
      _to: EtherAddress,
      _value: EtherInteger,
      txParams?: ITxParams
    ) => Promise<boolean>;
    request: (
      _from: EtherAddress,
      _to: EtherAddress,
      _value: EtherInteger
    ) => Promise<string>;
    estimateGas: (
      _from: EtherAddress,
      _to: EtherAddress,
      _value: EtherInteger
    ) => Promise<number>;
  };
  mint: {
    (_to: EtherAddress, _amount: EtherInteger, txParams?: ITxParams): Promise<
      boolean
    >;
    sendTransaction: (
      _to: EtherAddress,
      _amount: EtherInteger,
      txParams?: ITxParams
    ) => Promise<boolean>;
    call: (
      _to: EtherAddress,
      _amount: EtherInteger,
      txParams?: ITxParams
    ) => Promise<boolean>;
    request: (_to: EtherAddress, _amount: EtherInteger) => Promise<string>;
    estimateGas: (_to: EtherAddress, _amount: EtherInteger) => Promise<number>;
  };
  decreaseApproval: {
    (
      _spender: EtherAddress,
      _subtractedValue: EtherInteger,
      txParams?: ITxParams
    ): Promise<boolean>;
    sendTransaction: (
      _spender: EtherAddress,
      _subtractedValue: EtherInteger,
      txParams?: ITxParams
    ) => Promise<boolean>;
    call: (
      _spender: EtherAddress,
      _subtractedValue: EtherInteger,
      txParams?: ITxParams
    ) => Promise<boolean>;
    request: (
      _spender: EtherAddress,
      _subtractedValue: EtherInteger
    ) => Promise<string>;
    estimateGas: (
      _spender: EtherAddress,
      _subtractedValue: EtherInteger
    ) => Promise<number>;
  };
  finishMinting: {
    (txParams?: ITxParams): Promise<boolean>;
    sendTransaction: (txParams?: ITxParams) => Promise<boolean>;
    call: (txParams?: ITxParams) => Promise<boolean>;
    request: () => Promise<string>;
    estimateGas: () => Promise<number>;
  };
  transfer: {
    (_to: EtherAddress, _value: EtherInteger, txParams?: ITxParams): Promise<
      boolean
    >;
    sendTransaction: (
      _to: EtherAddress,
      _value: EtherInteger,
      txParams?: ITxParams
    ) => Promise<boolean>;
    call: (
      _to: EtherAddress,
      _value: EtherInteger,
      txParams?: ITxParams
    ) => Promise<boolean>;
    request: (_to: EtherAddress, _value: EtherInteger) => Promise<string>;
    estimateGas: (_to: EtherAddress, _value: EtherInteger) => Promise<number>;
  };
  increaseApproval: {
    (
      _spender: EtherAddress,
      _addedValue: EtherInteger,
      txParams?: ITxParams
    ): Promise<boolean>;
    sendTransaction: (
      _spender: EtherAddress,
      _addedValue: EtherInteger,
      txParams?: ITxParams
    ) => Promise<boolean>;
    call: (
      _spender: EtherAddress,
      _addedValue: EtherInteger,
      txParams?: ITxParams
    ) => Promise<boolean>;
    request: (
      _spender: EtherAddress,
      _addedValue: EtherInteger
    ) => Promise<string>;
    estimateGas: (
      _spender: EtherAddress,
      _addedValue: EtherInteger
    ) => Promise<number>;
  };
  transferOwnership: {
    (newOwner: EtherAddress, txParams?: ITxParams): Promise<void>;
    sendTransaction: (
      newOwner: EtherAddress,
      txParams?: ITxParams
    ) => Promise<void>;
    call: (newOwner: EtherAddress, txParams?: ITxParams) => Promise<void>;
    request: (newOwner: EtherAddress) => Promise<string>;
    estimateGas: (newOwner: EtherAddress) => Promise<number>;
  };
  burn: {
    (_amount: EtherInteger, txParams?: ITxParams): Promise<void>;
    sendTransaction: (
      _amount: EtherInteger,
      txParams?: ITxParams
    ) => Promise<void>;
    call: (_amount: EtherInteger, txParams?: ITxParams) => Promise<void>;
    request: (_amount: EtherInteger) => Promise<string>;
    estimateGas: (_amount: EtherInteger) => Promise<number>;
  };
}

export const TruffleMuzikaCoin: () => TruffleContract<IMuzikaCoin> = () =>
  contract(BuiltContract);
