import {StyleSheet, View} from 'react-native';

import tw from '../lib/tailwind';
import {useDeviceContext} from 'twrnc';

type Props = {
  children: React.ReactNode;
};

const List = ({children}: Props) => {
  useDeviceContext(tw);

  return (
    <View style={styles.container}>
      <View style={styles.itemsWrapper}>
        <View style={styles.items}>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...tw`w-full`,
  },
  itemsWrapper: {
    ...tw`bg-white`,
  },
  items: {
  },
});

export default List;
