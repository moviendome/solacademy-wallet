import {StyleSheet, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import tw from '../lib/tailwind';

type Props = {
  children: React.ReactNode;
  horizontal?: boolean;
  colors: string[];
}

const Gradient = ({children, horizontal, colors}: Props) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={[0, 0]}
        end={horizontal ? [0, 0] : [0, 1]}
        colors={colors}
      >
        <View style={styles.content}>
          {children}
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...tw`flex-1`,
    width: '100%',
  },
  content: {
    width: '100%',
    maxWidth: 800,
    alignSelf: 'center',
  },
});

export default Gradient;
