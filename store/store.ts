import { configureStore } from '@reduxjs/toolkit';
import mainSlice from './reducers/mainSlice';
import { stackOverFlowApi } from './services/stackOverFlowApi';

export const store = configureStore({
    reducer: {
        main: mainSlice,
        [stackOverFlowApi.reducerPath]: stackOverFlowApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(stackOverFlowApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
