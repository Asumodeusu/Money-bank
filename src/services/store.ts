// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import headerSlice from './slices/headerSlice';

export const store = configureStore({
  reducer: {
    header: headerSlice,
    // другие редюсеры будут добавляться здесь
  },
});

// Типы для TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;