import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import tw from '../lib/tailwind';
import {useDeviceContext} from 'twrnc';

type Props = {
  icon: string;
  onPress(): void;
  color: string;
};

const IconButton = ({icon, color, onPress}: Props) => {
  useDeviceContext(tw);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons name={icon} size={26} color={color} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...tw`justify-center items-center`,
  },
  containedContainer: {
    minWidth: 50,
    height: 50,
    ...tw`rounded-lg px-4 py-3 items-center justify-center`,
  },
});

export default IconButton;
