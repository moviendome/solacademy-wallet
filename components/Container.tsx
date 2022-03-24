import {StyleSheet, View} from 'react-native';

import tw from '../lib/tailwind';
import {useDeviceContext} from 'twrnc';

type Props = {
  bg?: string;
  children: React.ReactNode;
};

const Container = ({bg, children}: Props) => {
  useDeviceContext(tw);

  return (
    <View
      style={[
        styles.container,
        bg ? {backgroundColor: bg} : null
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Container;
