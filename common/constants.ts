import {Dimensions, Platform} from 'react-native';

export const C = {
  PLATFORM: (Platform.OS === 'web') ? 'web' : 'native',

  IS_MOBILE: Dimensions.get('window').width < 500,

  THEME: {
    GRADIENT: ['#14F195', '#9945FF', '#FFFFFF'],
    PRIMARY: '#9945FF',
    SECONDARY: '#14F195',
  }
}
