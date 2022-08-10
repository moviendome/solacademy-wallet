import React, { useEffect, useCallback, useState } from 'react';
import { Image } from 'react-native';

import {
  Block,
  Button,
  Column,
  Container,
  Header,
  List,
  ListItem,
  Gradient,
  Text,
  Wrapper
} from '../components';

import { C } from '../common';

import { RootTabScreenProps } from '../types';

import { useStoreState } from '../hooks/storeHooks';
import { accountFromSeed, maskedAddress } from '../utils';

import {
  getBalance,
  getSolanaPrice,
  requestAirdrop,
} from '../api';
import { useFocusEffect } from '@react-navigation/native';

export default function DashboardScreen({ navigation }: RootTabScreenProps<'Dashboard'>) {
  const { THEME } = C;

  const wallet = useStoreState((state) => state.wallet);
  const accounts = useStoreState((state) => state.accounts);

  const [account, setAccount] = useState({});

  useEffect(() => {
    async function generate() {
      const currentAccount = accounts[0];
      setAccount({
        index: currentAccount.index,
        title: currentAccount.title,
        keyPair: accountFromSeed(
          wallet.seed,
          currentAccount.index,
          currentAccount.derivationPath,
          0
        ),
      });
    }

    generate();
  }, []);

  const [balance, setBalance] = useState({
    usd: 0.0,
    sol: 0
  });

  useFocusEffect(
    useCallback(() => {
      async function getAsyncBalance() {
        if (account?.keyPair?.publicKey?.toString()) {
          const sol = await getBalance(account.keyPair.publicKey.toString());
          const usdPrice = await getSolanaPrice();

          setBalance({
            sol,
            usd: (sol * usdPrice).toFixed(2),
          });
        }
      }
      getAsyncBalance();
    }, [account])
  );

  const assets = [
    {
      id: 1,
      name: "Solana",
      symbol: "SOL",
      decimals: 9,
      logoURI: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    },
    {
      id: 2,
      name: "USDC Coin",
      symbol: "USDC",
      decimals: 6,
      logoURI: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
    },
    {
      id: 3,
      name: "Samoyed Coin",
      symbol: "SAMO",
      decimals: 9,
      logoURI: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU/logo.png",
    },
  ];

  const getAirdrop = async () => {
    const address = account.keyPair.publicKey.toString();

    console.log("Requesting Airdrop...")

    await requestAirdrop(address);
    const sol = await getBalance(address);
    const usdPrice = await getSolanaPrice();

    console.log("Setting updated balance...")

    setBalance({
      sol,
      usd: (sol * usdPrice).toFixed(2),
    });
  }

  return (
    <Container>
      <Gradient colors={THEME.GRADIENT}>
        <Block>
          <Wrapper>
            <Header
              title={`$${balance.usd}`}
              subtitle={maskedAddress(account?.keyPair?.publicKey?.toString())}
            />
          </Wrapper>
        </Block>

        <Block row>
          <Column half first>
            <Button
              color={THEME.PRIMARY}
              onPress={() => getAirdrop()}
            >
              Receive
            </Button>
          </Column>
          <Column half last>
            <Button
              color={THEME.PRIMARY}
              onPress={() => console.log('Send Pressed!')}
            >
              Send
            </Button>
          </Column>
        </Block>

        <Block noPaddingLeft noPaddingRight roundedTop>
          <Block justify noPaddingBottom>
            <Text size="sm" weight="bold" uppercase>Assets</Text>
          </Block>

          <Block>
            <Wrapper>
              <List>
                <ListItem
                  key={assets[0].id}
                  left={
                    <Image
                      style={{ width: 30, height: 30, resizeMode: 'stretch' }}
                      source={{
                        uri: assets[0].logoURI
                      }}
                    />
                  }
                  title={assets[0].name}
                  subtitle={`${balance?.sol} ${assets[0].symbol}`}
                  onPress={() => console.log('Pressed!')}
                  amount={balance?.usd ? `$${balance.usd}` : '-'}
                />
              </List>
            </Wrapper>
          </Block>
        </Block>
      </Gradient>
    </Container>
  );
}
