import {TextInput as T, StyleSheet} from 'react-native';

import tw from '../lib/tailwind';
import {useDeviceContext} from 'twrnc';

type Props = React.ComponentProps<typeof T> & {
  text: string;
  placeholder?: string;
  onChangeText: void;
  numeric: true;
};

const TextInput = ({text, placeholder, onChangeText, numeric, ...rest}: Props) => {
  useDeviceContext(tw);

  return (
    <T
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={text}
      keyboardType={numeric ? 'number-pad' : 'default'}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    ...tw`rounded-lg p-4 items-center`,
    height: 50,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
});

export default TextInput;
