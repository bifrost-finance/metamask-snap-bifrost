import type { SnapConfig } from '@bifrost-finance/metamask-bifrost-types';
import { getMetamaskState } from '../rpc/getMetamaskState';
import {
  defaultConfiguration,
  kusamaConfiguration,
  polkadotConfiguration,
  westendConfiguration
} from './predefined';

export function getDefaultConfiguration(networkName: string): SnapConfig {
  switch (networkName) {
    case 'polkadot':
      console.log('Polkadot configuration selected');
      return polkadotConfiguration;
    case 'kusama':
      console.log('Kusama configuration selected');
      return kusamaConfiguration;
    case 'westend':
      console.log('Westend configuration selected');
      return westendConfiguration;
    default:
      return defaultConfiguration;
  }
}

export async function getConfiguration(): Promise<SnapConfig> {
  const state = await getMetamaskState();

  if (!state || !state.config) {
    return defaultConfiguration;
  }
  return JSON.parse(<string>state.config) as SnapConfig;
}
