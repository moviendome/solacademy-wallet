// IMPORTANT to avoid: https://github.com/uuidjs/uuid#getrandomvalues-not-supported
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {StoreProvider} from 'easy-peasy';

import "./global";

import 'react-native-url-polyfill/auto';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';

import store from "./store";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <StoreProvider store={store}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </StoreProvider>
    );
  }
}
