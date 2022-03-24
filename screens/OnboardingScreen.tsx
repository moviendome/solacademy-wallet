import {
  Block,
  Button,
  Container,
  Header,
  Gradient,
  Text,
  Wrapper
} from '../components';

import {C} from '../common'

import {RootTabScreenProps} from '../types';

export default function OnboardingScreen({navigation}: RootTabScreenProps<'Onboarding'>) {
  const {THEME} = C;

  return (
    <>
      <Container>
        <Gradient colors={THEME.GRADIENT}>
          <Block>
            <Wrapper>
              <Header
                title='Welcome'
              />
            </Wrapper>
          </Block>

          <Block noPaddingLeft noPaddingRight roundedTop bg='white'>
            <Block justify>
              <Text size='sm' weight='bold' uppercase>Create Wallet</Text>
            </Block>

            <Block>
              <Wrapper>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius sapien mauris, a eleifend dolor dictum in. Etiam fermentum vel mi ac posuere.
                </Text>
              </Wrapper>
            </Block>
          </Block>
        </Gradient>
      </Container>

      <Block>
        <Wrapper>
          <Button color={THEME.PRIMARY} onPress={() => console.log('Pressed')}>Create Wallet</Button>
        </Wrapper>
      </Block>
    </>
  );
}
