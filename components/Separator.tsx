import {StyleSheet, View} from 'react-native';

import tw from '../lib/tailwind';
import {useDeviceContext} from 'twrnc';

const Separator = () => {
  useDeviceContext(tw);

  return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
  separator: {
    ...tw`w-full border-b border-gray-200`,
  },
});

export default Separator;
