import type { KeyringPair } from '@polkadot/keyring/types';
import { Keyring } from '@polkadot/keyring';
import { stringToU8a } from '@polkadot/util';
import type { JsonBIP44CoinTypeNode } from '@metamask/key-tree';
import type { SnapNetworks } from '@bifrost-finance/metamask-bifrost-types';
import { getConfiguration } from '../configuration';

/**
 * Returns KeyringPair if one is saved in wallet state, creates new one otherwise
 */
export async function getKeyPair(): Promise<KeyringPair> {
  const config = await getConfiguration();

  const bip44Node = (await snap.request({
    method: 'snap_getBip44Entropy',
    params: {
      coinType: getCoinTypeByNetwork(config.networkName)
    }
  })) as JsonBIP44CoinTypeNode;

  // generate keys
  const seed = bip44Node.privateKey.slice(0, 32);
  const ss58Format = config.addressPrefix;
  const keyring = new Keyring({ ss58Format });

  return keyring.addFromSeed(stringToU8a(seed));
}

const getCoinTypeByNetwork = (network: SnapNetworks): number => {
  switch (network) {
    case 'bifrostKusama':
    case 'bifrostPolkadot':
      return 788;
    case 'kusama':
    case 'westend':
      return 434;
    case 'polkadot':
      return 354;
  }
};
