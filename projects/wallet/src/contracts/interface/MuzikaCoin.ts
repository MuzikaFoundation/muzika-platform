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
  TxValue
} from '../typechain-runtime';
import BuiltContract from '../../../../../muzika-contract/build/contracts/MuzikaCoin.json';

export interface IMuzikaCoin extends TruffleContractInstance {
  mintingFinished(): Promise<boolean>;
  name(): Promise<string>;
  totalSupply(): Promise<BigNumber>;
  decimals(): Promise<BigNumber>;
  paused(): Promise<boolean>;
  owner(): Promise<string>;
  symbol(): Promise<string>;
  balanceOf(_owner: EtherAddress): Promise<BigNumber>;
  frozenAddress(arg0: EtherAddress): Promise<boolean>;
  allowance(_owner: EtherAddress, _spender: EtherAddress): Promise<BigNumber>;
  messagePreSignedHashing(
    _mode: BigNumber,
    _token: EtherAddress,
    _to: EtherAddress,
    _value: EtherInteger,
    _fee: EtherInteger,
    _nonce: EtherInteger,
    _version: EtherInteger
  ): Promise<BigNumber>;
  preSignedHashing(
    _mode: BigNumber,
    _token: EtherAddress,
    _to: EtherAddress,
    _value: EtherInteger,
    _fee: EtherInteger,
    _nonce: EtherInteger,
    _version: EtherInteger
  ): Promise<BigNumber>;

  unpause: {
    (txParams?: ITxParams): Promise<void>;
    sendTransaction: (txParams?: ITxParams) => Promise<void>;
    call: (txParams?: ITxParams) => Promise<void>;
    request: () => Promise<string>;
    estimateGas: () => Promise<number>;
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
  finishMinting: {
    (txParams?: ITxParams): Promise<boolean>;
    sendTransaction: (txParams?: ITxParams) => Promise<boolean>;
    call: (txParams?: ITxParams) => Promise<boolean>;
    request: () => Promise<string>;
    estimateGas: () => Promise<number>;
  };
  pause: {
    (txParams?: ITxParams): Promise<void>;
    sendTransaction: (txParams?: ITxParams) => Promise<void>;
    call: (txParams?: ITxParams) => Promise<void>;
    request: () => Promise<string>;
    estimateGas: () => Promise<number>;
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
  upgradePrefixPreSignedFirst: {
    (_version: EtherInteger, _prefix: string, txParams?: ITxParams): Promise<
      void
    >;
    sendTransaction: (
      _version: EtherInteger,
      _prefix: string,
      txParams?: ITxParams
    ) => Promise<void>;
    call: (
      _version: EtherInteger,
      _prefix: string,
      txParams?: ITxParams
    ) => Promise<void>;
    request: (_version: EtherInteger, _prefix: string) => Promise<string>;
    estimateGas: (_version: EtherInteger, _prefix: string) => Promise<number>;
  };
  upgradePrefixPreSignedSecond: {
    (_version: EtherInteger, _prefix: string, txParams?: ITxParams): Promise<
      void
    >;
    sendTransaction: (
      _version: EtherInteger,
      _prefix: string,
      txParams?: ITxParams
    ) => Promise<void>;
    call: (
      _version: EtherInteger,
      _prefix: string,
      txParams?: ITxParams
    ) => Promise<void>;
    request: (_version: EtherInteger, _prefix: string) => Promise<string>;
    estimateGas: (_version: EtherInteger, _prefix: string) => Promise<number>;
  };
  freezeAddress: {
    (_target: EtherAddress, txParams?: ITxParams): Promise<void>;
    sendTransaction: (
      _target: EtherAddress,
      txParams?: ITxParams
    ) => Promise<void>;
    call: (_target: EtherAddress, txParams?: ITxParams) => Promise<void>;
    request: (_target: EtherAddress) => Promise<string>;
    estimateGas: (_target: EtherAddress) => Promise<number>;
  };
  unfreezeAddress: {
    (_target: EtherAddress, txParams?: ITxParams): Promise<void>;
    sendTransaction: (
      _target: EtherAddress,
      txParams?: ITxParams
    ) => Promise<void>;
    call: (_target: EtherAddress, txParams?: ITxParams) => Promise<void>;
    request: (_target: EtherAddress) => Promise<string>;
    estimateGas: (_target: EtherAddress) => Promise<number>;
  };
  burn: {
    (_value: EtherInteger, txParams?: ITxParams): Promise<void>;
    sendTransaction: (
      _value: EtherInteger,
      txParams?: ITxParams
    ) => Promise<void>;
    call: (_value: EtherInteger, txParams?: ITxParams) => Promise<void>;
    request: (_value: EtherInteger) => Promise<string>;
    estimateGas: (_value: EtherInteger) => Promise<number>;
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
  transferPreSigned: {
    (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string,
      txParams?: ITxParams
    ): Promise<boolean>;
    sendTransaction: (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string,
      txParams?: ITxParams
    ) => Promise<boolean>;
    call: (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string,
      txParams?: ITxParams
    ) => Promise<boolean>;
    request: (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string
    ) => Promise<string>;
    estimateGas: (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string
    ) => Promise<number>;
  };
  approvePreSigned: {
    (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string,
      txParams?: ITxParams
    ): Promise<boolean>;
    sendTransaction: (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string,
      txParams?: ITxParams
    ) => Promise<boolean>;
    call: (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string,
      txParams?: ITxParams
    ) => Promise<boolean>;
    request: (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string
    ) => Promise<string>;
    estimateGas: (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string
    ) => Promise<number>;
  };
  increaseApprovalPreSigned: {
    (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string,
      txParams?: ITxParams
    ): Promise<boolean>;
    sendTransaction: (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string,
      txParams?: ITxParams
    ) => Promise<boolean>;
    call: (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string,
      txParams?: ITxParams
    ) => Promise<boolean>;
    request: (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string
    ) => Promise<string>;
    estimateGas: (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string
    ) => Promise<number>;
  };
  decreaseApprovalPreSigned: {
    (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string,
      txParams?: ITxParams
    ): Promise<boolean>;
    sendTransaction: (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string,
      txParams?: ITxParams
    ) => Promise<boolean>;
    call: (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string,
      txParams?: ITxParams
    ) => Promise<boolean>;
    request: (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string
    ) => Promise<string>;
    estimateGas: (
      _to: EtherAddress,
      _value: EtherInteger,
      _fee: EtherInteger,
      _nonce: EtherInteger,
      _version: EtherInteger,
      _sig: string
    ) => Promise<number>;
  };
}

export const TruffleMuzikaCoin: () => TruffleContract<IMuzikaCoin> = () =>
  contract(BuiltContract);
