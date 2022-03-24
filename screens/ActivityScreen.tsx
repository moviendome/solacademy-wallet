import {
  Block,
  Container,
  Header,
  List,
  ListItem,
  Gradient,
  Text,
  Wrapper
} from '../components';

import {RootTabScreenProps} from '../types';

import {C} from "../common"

export default function ActivityScreen({navigation}: RootTabScreenProps<'Activity'>) {
  const {THEME} = C;

  const activity = [
    {
      id: 1,
      icon: 'arrow-collapse-down',
      title: 'Received 100 PIP',
      subtitle: '',
      when: '29d'
    },
    {
      id: 2,
      icon: 'arrow-collapse-down',
      title: 'Received 2.10 SOL',
      subtitle: '',
      when: '1mo'
    },
    {
      id: 3,
      icon: 'send',
      title: 'Sent 500 USDC',
      subtitle: '',
      when: '1mo'
    },
    {
      id: 4,
      icon: 'check-bold',
      title: 'vBWp...afyn',
      subtitle: 'Success',
      when: '3mo'
    },
  ];

  return (
    <Container>
      <Gradient colors={THEME.GRADIENT}>
        <Block>
          <Wrapper>
            <Header
              title='Activity'
            />
          </Wrapper>
        </Block>

        <Block noPaddingLeft noPaddingRight roundedTop bg='white'>
          <Block justify noPaddingBottom>
            <Text size='sm' weight='bold' uppercase>Recent Activity</Text>
          </Block>

          <Block>
            <Wrapper>
              <List>
                {activity.map(item => (
                  <ListItem
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    subtitle={item.subtitle}
                    onPress={() => console.log('Pressed!')}
                    amount={item.when}
                  />
                ))}
              </List>
            </Wrapper>
          </Block>

        </Block>
      </Gradient>
    </Container>
  );
}
