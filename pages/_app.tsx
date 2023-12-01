import type { AppProps } from "next/app";
import { ThirdwebProvider, coinbaseWallet, embeddedWallet, en, localWallet, metamaskWallet, smartWallet, walletConnect } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ACCOUNT_FACTORY_ADDRESS } from "../constants/addresses";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const smartWalletOptions = {
  factoryAddress: ACCOUNT_FACTORY_ADDRESS,
  gasless: true,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
<ThirdwebProvider
      activeChain="mumbai"
      clientId="c2275bfc94ce6a461730c4b6b36b7601"
      locale={en()}
      supportedWallets={[
        smartWallet(
          metamaskWallet(),
          smartWalletOptions,
        ),
        smartWallet(
          coinbaseWallet({ recommended: true }),
          smartWalletOptions,
        ),
        smartWallet(
          walletConnect(),
          smartWalletOptions,
        ),
        smartWallet(
          localWallet(),
          smartWalletOptions,
        ),
        smartWallet(
          embeddedWallet({
            auth: {
              options: [
                "email",
                "google",
                "apple",
                "facebook",
              ],
            },
          }),
          smartWalletOptions,
        ),
      ]}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
