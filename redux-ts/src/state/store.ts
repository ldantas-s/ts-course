import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { repositories } from './reducers/repositories';

export const store = configureStore({
  reducer: {
    [repositories.reducerPath]: repositories.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(repositories.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;
