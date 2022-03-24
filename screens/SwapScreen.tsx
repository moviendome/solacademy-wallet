import {Image} from 'react-native';

import {
  Block,
  Button,
  Column,
  Container,
  Header,
  Gradient,
  Separator,
  Text,
  TextInput,
  Wrapper
} from '../components';

import {C} from '../common';

import {RootTabScreenProps} from '../types';

export default function SwapScreen({navigation}: RootTabScreenProps<'Swap'>) {
  const {THEME} = C;

  const assets = [
    {
      id: 1,
      name: 'Solana',
      symbol: 'SOL',
      decimals: 9,
      logoURI: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
    },
    {
      id: 2,
      name: 'USDC Coin',
      symbol: 'USDC',
      decimals: 6,
      logoURI: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
    },
  ];

  return (
    <Container>
      <Gradient colors={THEME.GRADIENT}>
        <Block>
          <Wrapper>
            <Header
              title='Swap'
            />
          </Wrapper>
        </Block>

        <Block noPaddingLeft noPaddingRight roundedTop bg='white'>
          <Wrapper>
            <Block justify noPaddingBottom>
              <Text size='sm' weight='bold' uppercase>Swap From</Text>
            </Block>

            <Block><Separator /></Block>

            <Block row>
              <Column w1 first>
                <Image
                  style={{width: 50, height: 50, resizeMode: 'stretch'}}
                  source={{
                    uri: assets[0].logoURI
                  }}
                />
              </Column>
              <Column w1>
                <Text size='lg' weight='bold'>{assets[0].symbol}</Text>
              </Column>
              <Column w3 last>
                <TextInput placeholder='0.000000001' />
              </Column>
            </Block>

            <Block justify noPaddingBottom>
              <Text size="sm" weight='bold' uppercase>Swap to </Text>
            </Block>

            <Block><Separator /></Block>

            <Block row>
              <Column w1 first>
                <Image
                  style={{width: 50, height: 50, resizeMode: 'stretch'}}
                  source={{
                    uri: assets[1].logoURI
                  }}
                />
              </Column>
              <Column w1>
                <Text size='lg' weight='bold'>{assets[1].symbol}</Text>
              </Column>
              <Column w3 last>
                <TextInput placeholder='' />
              </Column>
            </Block>

            <Block><Separator /></Block>

            <Block>
              <Button color={THEME.PRIMARY} iconRight='arrow-right' onPress={() => console.log('Pressed!')}>Swap</Button>
            </Block>
          </Wrapper>
        </Block>
      </Gradient>
    </Container>
  );
}
