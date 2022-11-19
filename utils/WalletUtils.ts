import Web3Modal from 'web3modal';
import {providers} from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';

let web3Modal: Web3Modal | null = null;

export async function getLibrary(): Promise<providers.Web3Provider> {
  web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.env.NEXT_PUBLIC_INFURA_KEY,
        },
      },
    },
  });

  const provider = await web3Modal.connect();
  return new providers.Web3Provider(provider);
}

export async function connect() {
  const library = await getLibrary();
  const signer = library.getSigner();

  return signer;
}
