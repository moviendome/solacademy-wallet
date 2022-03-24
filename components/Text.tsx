import {Text as T, StyleSheet} from 'react-native';

import tw from '../lib/tailwind';
import {useDeviceContext} from 'twrnc';

type Props = React.ComponentProps<typeof T> & {
  children: React.ReactNode;
  size?:
  | 'xs'
  | 'sm'
  | 'tiny'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl';
  weight?:
  | 'thin'
  | 'extralight'
  | 'light'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';
  uppercase?: true;
  color?: string;
};

const Text = ({children, size, weight, uppercase, color, ...rest}: Props) => {
  useDeviceContext(tw);

  const _size = () => {
    switch (size) {
      case 'xs': {
        return styles.xs;
      }
      case 'sm': {
        return styles.sm;
      }
      case 'tiny': {
        return styles.tiny;
      }
      case 'lg': {
        return styles.lg;
      }
      case 'xl': {
        return styles.xl;
      }
      case '2xl': {
        return styles.s2xl;
      }
      case '3xl': {
        return styles.s3xl;
      }
      case '4xl': {
        return styles.s4xl;
      }
      case '5xl': {
        return styles.s5xl;
      }
      case '6xl': {
        return styles.s6xl;
      }
      case '7xl': {
        return styles.s7xl;
      }
    }
  };

  const _weight = () => {
    switch (weight) {
      case 'thin': {
        return styles.thin;
      }
      case 'extralight': {
        return styles.extralight;
      }
      case 'light': {
        return styles.light;
      }
      case 'medium': {
        return styles.medium;
      }
      case 'semibold': {
        return styles.semibold;
      }
      case 'bold': {
        return styles.bold;
      }
      case 'extrabold': {
        return styles.extrabold;
      }
      case 'black': {
        return styles.black;
      }
    }
  };

  const _uppercase = () => {
    return styles.uppercase;
  }

  return (
    <T
      style={[
        size ? _size() : styles.body,
        weight ? _weight() : styles.normal,
        uppercase ? _uppercase() : null,
        {color: color ? color : 'black'}
      ]}
      {...rest}
    >
      {children}
    </T>
  );
};

const styles = StyleSheet.create({
  xs: {
    ...tw`text-xs`,
  },
  sm: {
    ...tw`text-sm`,
  },
  tiny: {
    ...tw`text-tiny`,
  },
  lg: {
    ...tw`text-lg`,
  },
  xl: {
    ...tw`text-xl`,
  },
  s2xl: {
    ...tw`text-2xl`,
  },
  s3xl: {
    ...tw`text-3xl`,
  },
  s4xl: {
    ...tw`text-4xl`,
  },
  s5xl: {
    ...tw`text-5xl`,
  },
  s6xl: {
    ...tw`text-6xl`,
  },
  s7xl: {
    ...tw`text-7xl`,
  },
  body: {
    ...tw`text-base`,
  },
  thin: {
    ...tw`font-thin`,
  },
  extralight: {
    ...tw`font-extralight`,
  },
  light: {
    ...tw`font-light`,
  },
  medium: {
    ...tw`font-medium`,
  },
  normal: {
    ...tw`font-normal`,
  },
  semibold: {
    ...tw`font-semibold`,
  },
  bold: {
    ...tw`font-bold`,
  },
  extrabold: {
    ...tw`font-extrabold`,
  },
  black: {
    ...tw`font-black`,
  },
  uppercase: {
    ...tw`uppercase`,
  },
});

export default Text;
