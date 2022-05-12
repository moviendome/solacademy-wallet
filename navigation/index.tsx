import {FontAwesome} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {C} from '../common';

import {
  OnboardingScreen,
  DashboardScreen,
  CollectiblesScreen,
  SwapScreen,
  ActivityScreen,
  SettingsScreen,
  ModalScreen,
  NotFoundScreen,
} from '../screens'

import {RootStackParamList, RootTabParamList, RootTabScreenProps} from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import { useStoreState } from "../hooks/storeHooks";

const {THEME} = C;

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const hasWallet = useStoreState((state) => state.hasWallet);

  if (hasWallet) {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Root' component={BottomTabNavigator} options={{headerShown: false}} />
        <Stack.Screen name='NotFound' component={NotFoundScreen} options={{title: 'Oops!'}} />
        <Stack.Group screenOptions={{presentation: 'modal', headerShown: false}}>
          <Stack.Screen name='Modal' component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen name="onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName='Dashboard'
      screenOptions={{
        tabBarActiveTintColor: THEME.PRIMARY,
        headerShown: false,
      }}>
      <BottomTab.Screen
        name='Dashboard'
        component={DashboardScreen}
        options={{
          title: 'Dashboard',
          tabBarIcon: ({color}) => <TabBarIcon name='dollar' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Collectibles'
        component={CollectiblesScreen}
        options={{
          title: 'Collectibles',
          tabBarIcon: ({color}) => <TabBarIcon name='th-large' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Swap'
        component={SwapScreen}
        options={{
          title: 'Swap',
          tabBarIcon: ({color}) => <TabBarIcon name='exchange' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Activity'
        component={ActivityScreen}
        options={{
          title: 'Activity',
          tabBarIcon: ({color}) => <TabBarIcon name="flash" color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({color}) => <TabBarIcon name='cog' color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={24} style={{marginBottom: 0}} {...props} />;
}
