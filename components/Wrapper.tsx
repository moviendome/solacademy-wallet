import {StyleSheet, View} from 'react-native';

import tw from '../lib/tailwind';
import {useDeviceContext} from 'twrnc';

type Props = {
  children: React.ReactNode;
  noPaddingBottom?: true;
  noPaddingLeft?: true;
  noPaddingRight?: true;
  noPaddingTop?: true;
};

const Wrapper = ({
  children,
  noPaddingBottom,
  noPaddingLeft,
  noPaddingRight,
  noPaddingTop,
}: Props) => {
  useDeviceContext(tw);

  return (
    <View
      style={[
        styles.container,
        noPaddingBottom ? styles.noPb : null,
        noPaddingLeft ? styles.noPl : null,
        noPaddingRight ? styles.noPr : null,
        noPaddingTop ? styles.noPt : null,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...tw`p-2`,
  },
  noPt: {
    ...tw`pt-0`,
  },
  noPb: {
    ...tw`pb-0`,
  },
  noPl: {
    ...tw`pl-0`,
  },
  noPr: {
    ...tw`pr-0`,
  },
});

export default Wrapper;
