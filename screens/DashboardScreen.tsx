import {Image} from 'react-native';

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

import {C} from '../common';

import {RootTabScreenProps} from '../types';

export default function DashboardScreen({navigation}: RootTabScreenProps<'Dashboard'>) {
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
              title='$1.050,00'
              subtitle='9CKN...XCRA'
            />
          </Wrapper>
        </Block>

        <Block row>
          <Column half first>
            <Button
              color={THEME.PRIMARY}
              onPress={() => console.log('Receive Pressed!')}
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
                      style={{width: 30, height: 30, resizeMode: 'stretch'}}
                      source={{
                        uri: assets[0].logoURI
                      }}
                    />
                  }
                  title={assets[0].name}
                  subtitle={`4.4626 ${assets[0].symbol}`}
                  onPress={() => console.log('Pressed!')}
                  amount="$404.01"
                />

                <ListItem
                  key={assets[1].id}
                  left={
                    <Image
                      style={{width: 30, height: 30, resizeMode: 'stretch'}}
                      source={{
                        uri: assets[1].logoURI
                      }}
                    />
                  }
                  title={assets[1].name}
                  subtitle={`10.38211 ${assets[1].symbol}`}
                  onPress={() => console.log('Pressed!')}
                  amount="$10.38"
                  last
                />
              </List>
            </Wrapper>
          </Block>
        </Block>
      </Gradient>
    </Container>
  );
}
