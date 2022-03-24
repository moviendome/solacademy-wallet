import {
  Block,
  Container,
  Header,
  List,
  ListItem,
  Gradient,
  Text,
  Wrapper
} from '../components';

import {RootTabScreenProps} from '../types';

import {C} from "../common"

export default function SettingsScreen({navigation}: RootTabScreenProps<'Settings'>) {
  const {THEME} = C;

  return (
    <Container>
      <Gradient colors={THEME.GRADIENT}>
        <Block>
          <Wrapper>
            <Header
              title='Settings'
            />
          </Wrapper>
        </Block>

        <Block noPaddingLeft noPaddingRight roundedTop bg='white'>
          <Block justify noPaddingBottom>
            <Text size='sm' weight='bold' uppercase>Devnet</Text>
          </Block>


          <Block>
            <Wrapper>
              <List>
                <ListItem
                  key='airdrop'
                  icon='send'
                  title='Airdrop'
                  subtitle='Request for 1 SOL Airdrop'
                  onPress={() => console.log('Pressed!')}
                />
              </List>
            </Wrapper>
          </Block>

        </Block>
      </Gradient>
    </Container>
  );
}
