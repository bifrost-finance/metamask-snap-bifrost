import type { SnapConfig } from '@bifrost-finance/metamask-bifrost-types';

declare module '@bifrost-finance/metamask-bifrost-adapter' {
  export function injectMetamaskPolkadotSnapProvider(
    network: 'westend' | 'kusama',
    config?: SnapConfig,
    pluginOrigin?: string
  ): void;
}
