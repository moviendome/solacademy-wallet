import {ScrollView, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import tw from '../lib/tailwind';

import {
  Block,
  Container,
  Header,
  Gradient,
  Text,
  Wrapper
} from '../components';

import {RootTabScreenProps} from '../types';

import {C} from '../common';

const data = [
  {
    id: '1',
    name: 'One',
    // image: require('../assets/images/')
  },
  {
    id: '2',
    name: 'Two',
    // image: require('../assets/images/')
  },
  {
    id: '3',
    name: 'Three',
    // image: require('../assets/images/')
  },
  {
    id: '4',
    name: 'Four',
    // image: require('../assets/images/')
  },
  {
    id: '5',
    name: 'Five',
    // image: require('../assets/images/')
  },
  {
    id: '6',
    name: 'Six',
    // image: require('../assets/images/')
  },
  {
    id: '7',
    name: 'Seven',
    // image: require('../assets/images/')
  },
  {
    id: '8',
    name: 'Eight',
    // image: require('../assets/images/')
  },
  {
    id: '9',
    name: 'Nine',
    // image: require('../assets/images/')
  },
  {
    id: '10',
    name: 'Ten',
    // image: require('../assets/images/')
  },
  {
    id: '11',
    name: 'Eleven',
    // image: require('../assets/images/')
  },
  {
    id: '12',
    name: 'Twelve',
    // image: require('../assets/images/')
  },
]

export default function CollectiblesScreen({navigation}: RootTabScreenProps<'Collectibles'>) {
  const {THEME} = C;

  const AddIcon = () => {
    return (
      <TouchableWithoutFeedback onPress={() => console.log('Pressed!')}>
        <MaterialCommunityIcons name='plus' size={26} color={THEME.PRIMARY} />
      </TouchableWithoutFeedback>
    );
  };

  const RenderContent = ({children}: any) => {
    if (C.IS_MOBILE) {
      return (
        <ScrollView>{children}</ScrollView>
      )
    }

    return children
  }

  const renderRow = () => {
    const elementsInRow = C.IS_MOBILE ? 2 : 4

    const chunk = (arr: object[], size: number) =>
      Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
        arr.slice(i * size, i * size + size)
      );

    const rows = chunk(data, elementsInRow)

    return rows.map((row, index) => {
      return <View style={styles.row} key={`row-${index}`}>
        {
          row.map(item => (
            <View key={item.id} style={styles.card}>
              { /*
              <Image
                style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
                source={item.image}
              />
             */ }
            </View>
          ))
        }
      </View>
    })
  }

  return (
    <Container>
      <Gradient colors={THEME.GRADIENT}>
        <Block>
          <Wrapper>
            <Header
              title='Your Collectibles'
              right={<AddIcon />}
            />
          </Wrapper>
        </Block>

        <Block noPaddingLeft noPaddingRight roundedTop bg='white'>
          <View style={{height: 600}}>
            <RenderContent>
              <View style={styles.content}>
                {data ? renderRow() : (<Text>Loading....</Text>)}
              </View>
            </RenderContent>
          </View>
        </Block>
      </Gradient>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  row: {
    width: '100%',
    maxWidth: C.IS_MOBILE ? 320 : 860,
    ...tw`flex-row`
  },
  card: {
    width: C.IS_MOBILE ? 150 : 174,
    height: C.IS_MOBILE ? 150 : 174,
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center'
  },
})
