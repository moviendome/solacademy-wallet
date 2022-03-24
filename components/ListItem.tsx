import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {Text} from '../components';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import tw from '../lib/tailwind';
import {useDeviceContext} from 'twrnc';

const ListItem = ({
  last,
  onPress,
  left,
  right,
  icon,
  iconColor,
  title,
  subtitle,
  amount,
}: {
  last?: true;
  onPress(): void;
  left?: object;
  right?: object;
  title: string;
  subtitle: string;
  icon?: string;
  iconColor?: string;
  amount: string;
}) => {
  useDeviceContext(tw);

  return (
    <View style={[styles.container, last ? styles.last : null]}>
      <TouchableOpacity onPress={onPress} style={{flex: 1}}>
        <View style={styles.row}>
          {icon && (
            <View style={styles.rowLeft}>
              <View style={styles.iconCircle}>
                <MaterialCommunityIcons name={icon} size={18} color={iconColor} />
              </View>
            </View>
          )}
          {left && (
            <View style={styles.rowLeft}>
              {left}
            </View>
          )}
          <View style={styles.rowContent}>
            <Text size='lg'>{title}</Text>
            <Text size='sm' color='#666666'>{subtitle}</Text>
          </View>
          {amount && (
            <View style={styles.rowRight}>
              <Text style={styles.amount}>{amount}</Text>
            </View>
          )}
          {right && (
            <View style={styles.rowRight}>
              {right}
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    ...tw`w-full flex-row items-center border-b border-gray-200 pb-2 mb-2 justify-between`,
    height: 60,
  },
  last: {
    ...tw`border-white pb-0 mb-0`,
  },
  leftContainer: {
    ...tw`w-1/5 justify-center`,
  },
  iconCircle: {
    ...tw`rounded-full h-8 w-8 items-center justify-center bg-gray-100`,
  },
  content3: {
    ...tw`w-2.5/5`,
  },
  content4: {
    ...tw`w-4/5`,
  },
  content5: {
    ...tw`w-5/5`,
  },
  right: {
    ...tw`w-1.5/5 items-end`,
  },
  amount: {
    ...tw`text-sm font-bold`,
  },

  row: {
    ...tw`flex-1 flex-row items-center`
  },
  rowLeft: {
    width: 40,
  },
  rowContent: {
    ...tw`flex-1`,
  },
  rowRight: {
    ...tw`items-end`,
    width: 80,
  }
});

export default ListItem;
