export function shortAddress(address: string): string {
  return address.slice(0, 7) + '.....' + address.slice(-7);
}

export function getCurrency(network: string): string {
  switch (network) {
    case 'bifrostKusama':
    case 'bifrostPolkadot':
      return 'BNC';
    case 'kusama':
      return 'KSM';
    case 'westend':
      return 'WND';
  }
  return '';
}
