import {StyleSheet, View} from 'react-native';


import tw from '../lib/tailwind';
import {useDeviceContext} from 'twrnc';

type Props = {
  bg?: string;
  children: React.ReactNode;
  justify?: true;
  noPaddingBottom?: true;
  noPaddingLeft?: true;
  noPaddingRight?: true;
  noPaddingTop?: true;
  roundedTop?: boolean;
  row?: true;
};

const Block = ({
  bg,
  children,
  justify,
  noPaddingBottom,
  noPaddingLeft,
  noPaddingRight,
  noPaddingTop,
  roundedTop,
  row,
}: Props) => {
  useDeviceContext(tw);

  return (
    <View
      style={[
        styles.container,
        bg ? {backgroundColor: bg} : null,
        justify ? styles.justify : null,
        noPaddingBottom ? styles.noPb : null,
        noPaddingLeft ? styles.noPl : null,
        noPaddingRight ? styles.noPr : null,
        noPaddingTop ? styles.noPt : null,
        roundedTop ? styles.roundedTop : null,
        row ? styles.row : null,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...tw`p-4`,
  },
  row: {
    ...tw`flex-row`,
  },
  justify: {
    ...tw`justify-between items-center`,
  },
  noPt: {
    ...tw`pt-0`,
  },
  noPr: {
    ...tw`pr-0`,
  },
  noPl: {
    ...tw`pl-0`,
  },
  noPb: {
    ...tw`pb-0`,
  },
  roundedTop: {
    backgroundColor: 'white',
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    minHeight: 800,
  }
});

export default Block;
