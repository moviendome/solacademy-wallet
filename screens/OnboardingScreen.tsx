import { View } from 'react-native';

import {
  Block,
  Button,
  Column,
  Container,
  Header,
  Gradient,
  Text,
  Wrapper
} from '../components';

import { C } from "../common"

import { useStoreActions } from "../hooks/storeHooks";

import { RootTabScreenProps } from '../types';

import { generateMnemonic, mnemonicToSeed, accountFromSeed } from "../utils";

export default function DashboardScreen({ navigation }: RootTabScreenProps<'Onboarding'>) {
  const { THEME } = C;

  const addWallet = useStoreActions((actions) => actions.addWallet);

  const addDefaultAccount = useStoreActions(
    (actions) => actions.addDefaultAccount
  );

  const createWallet = async () => {
    const mnemonic = await generateMnemonic();
    const seed = await mnemonicToSeed(mnemonic);

    addWallet({
      mnemonic: mnemonic,
      seed: seed,
    });

    addDefaultAccount();
  }

  return (
    <>
      <Container>
        <Gradient colors={THEME.GRADIENT}>
          <View style={{ width: "100%", maxWidth: 800, alignSelf: "center" }}>
            <Block>
              <Wrapper>
                <Header
                  title="Welcome"
                />
              </Wrapper>
            </Block>

            <Block></Block>

            <Block noPaddingLeft noPaddingRight roundedTop bg="white">
              <Block justify>
                <Text size="sm" weight="bold" uppercase>Create Wallet</Text>
              </Block>

              <View style={{ height: 800 }}>
                <Block>
                  <Wrapper>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius sapien mauris, a eleifend dolor dictum in. Etiam fermentum vel mi ac posuere.
                    </Text>
                  </Wrapper>

                  <Wrapper>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius sapien mauris, a eleifend dolor dictum in. Etiam fermentum vel mi ac posuere.
                    </Text>
                  </Wrapper>
                </Block>
              </View>
            </Block>
          </View>
        </Gradient>
      </Container>

      <View style={{ backgroundColor: "white" }}>
        <Block>
          <Wrapper>
            <Button color={THEME.PRIMARY} onPress={() => createWallet()}>Create Wallet</Button>
          </Wrapper>
        </Block>
      </View>
    </>
  );
}
