import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import tw from '../lib/tailwind';
import {useDeviceContext} from 'twrnc';

const Button = ({
  mode = 'contained',
  color,
  children,
  onPress,
  iconLeft,
  iconRight,
  loading,
}: {
  mode?: 'text' | 'outlined' | 'contained';
  color: string;
  children: React.ReactNode;
  onPress(): void;
  iconLeft?: string;
  iconRight?: string;
  loading?: boolean;
}) => {
  useDeviceContext(tw);

  const _mode = () => {
    switch (mode) {
      case 'text': {
        return [styles.textContainer];
      }
      case 'outlined': {
        if (color) return [styles.outlinedContainer, {borderColor: color}];
        return styles.outlinedContainer;
      }
      default: {
        if (color)
          return [styles.containedContainer, {backgroundColor: color}];
        return styles.containedContainer;
      }
    }
  };

  const _text = () => {
    switch (mode) {
      case 'text': {
        return styles.text;
      }
      case 'outlined': {
        return styles.text;
      }
      default: {
        return styles.textContained;
      }
    }
  };

  const _icon = () => {
    switch (mode) {
      case 'text': {
        return 'black';
      }
      case 'outlined': {
        return 'black';
      }
      default: {
        return 'white';
      }
    }
  };

  return (
    <TouchableHighlight onPress={onPress} style={[_mode()]}>
      <View style={iconLeft || iconRight ? styles.row : null}>
        {loading && (
          <View style={styles.iconLeft}>
            <ActivityIndicator size='large' color={_icon()} />
          </View>
        )}
        {iconLeft && (
          <View style={styles.iconLeft}>
            <MaterialCommunityIcons name={iconLeft} size={18} color={_icon()} />
          </View>
        )}
        {!loading && (
          <Text style={_text()}>{children}</Text>
        )}
        {iconRight && (
          <View style={styles.iconRight}>
            <MaterialCommunityIcons name={iconRight} size={18} color={_icon()} />
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  row: {
    ...tw`flex-row items-center`,
  },
  iconLeft: {
    ...tw`pr-2`,
  },
  iconRight: {
    ...tw`pl-2`,
  },
  textContainer: {
    ...tw`px-4 py-3 items-center justify-center`,
    minWidth: 50,
    height: 50,
  },
  containedContainer: {
    minWidth: 50,
    height: 50,
    ...tw`rounded-lg px-4 py-3 items-center justify-center`,
  },
  outlinedContainer: {
    minWidth: 50,
    height: 50,
    ...tw`rounded-lg border px-4 py-3 items-center justify-center`,
  },
  text: {
    ...tw`text-body font-bold text-center uppercase text-primary`,
  },
  textContained: {
    ...tw`text-white text-body font-bold text-center uppercase`,
  },
});

export default Button;
