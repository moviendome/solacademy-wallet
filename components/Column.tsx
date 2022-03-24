import {StyleSheet, View} from 'react-native';

import tw from '../lib/tailwind';
import {useDeviceContext} from 'twrnc';

type Props = {
  first?: true;
  last?: true;
  w1?: true;
  w2?: true;
  w3?: true;
  w4?: true;
  w5?: true;
  half?: true;
  center?: true;
  children: React.ReactNode;
};

const Column = ({first, last, w1, w2, w3, w4, w5, half, center, children}: Props) => {
  useDeviceContext(tw);

  return (
    <View
      style={[
        styles.container,
        styles.padding,
        first ? styles.noPl : null,
        last ? styles.noPr : null,
        w1 ? styles.w1 : null,
        w2 ? styles.w2 : null,
        w3 ? styles.w3 : null,
        w4 ? styles.w4 : null,
        w5 ? styles.w5 : null,
        half ? styles.half : null,
        center ? styles.center : null,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  w1: {
    ...tw`w-1/5`,
  },
  w2: {
    ...tw`w-2/5`,
  },
  w3: {
    ...tw`w-3/5`,
  },
  w4: {
    ...tw`w-4/5`,
  },
  w5: {
    ...tw`w-5/5`,
  },
  half: {
    ...tw`w-1/2`,
  },
  center: {
    ...tw`items-center`,
  },
  padding: {
    ...tw`pl-2 pr-2`,
  },
  noPl: {
    ...tw`pl-0`,
  },
  noPr: {
    ...tw`pr-0`,
  },
});

export default Column;
