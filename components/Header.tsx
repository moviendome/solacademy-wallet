import {StyleSheet, View} from 'react-native';

import {IconButton, Text} from '../components';

import tw from '../lib/tailwind';
import {useDeviceContext} from 'twrnc';

import {useNavigation} from '@react-navigation/native';

import {C} from '../common'

type Props = {
  title: string;
  subtitle?: string;
  left?: object;
  right?: object;
  back?: true;
};

const Header = ({back, title, subtitle, left, right}: Props) => {
  useDeviceContext(tw);
  const navigation = useNavigation();

  const {THEME} = C;

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {back && (
          <IconButton
            icon='chevron-left'
            color={THEME.PRIMARY}
            onPress={() => navigation.goBack()}
          />
        )}
        {left ? left : null}
      </View>

      <View style={styles.content}>
        {title && (
          <Text size='2xl' weight='bold' color={THEME.PRIMARY}>
            {title}
          </Text>
        )}
        {subtitle && <Text uppercase color={THEME.PRIMARY}>{subtitle}</Text>}
      </View>

      <View style={styles.right}>{right ? right : null}</View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    ...tw`w-full flex-row justify-between items-center pt-4`,
  },
  left: {
    width: 40,
  },
  content: {
    ...tw`flex-1 items-center`,
  },
  right: {
    ...tw`items-end`,
    width: 40,
  },
});

export default Header;
