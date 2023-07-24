import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from '../reducers';
import * as Todo from '../reducers/todos';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [Todo.reducerPath]: Todo.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(Todo.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
