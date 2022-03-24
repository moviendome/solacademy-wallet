import {
  Generic,
  generic,
  createStore,
  persist,
} from 'easy-peasy';

import storage from '../storage';

export interface WalletModel<K> {
  wallet: Generic<K>;
}

const store = createStore<WalletModel>(
  persist(
    {
      wallet: generic({}),
    },
    {
      storage: storage,
    }
  )
);

export default store;
