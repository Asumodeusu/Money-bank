import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './slices/headerSlice';

// Создаем главное хранилище состояния приложения
export const store = configureStore({
  reducer: {
    // Подключаем редюсер для управления состоянием хедера
    // Ключ 'header' - это название раздела в состоянии
    header: headerReducer,
  },
});

// Создаем типы для TypeScript чтобы избежать ошибок типизации
export type RootState = ReturnType<typeof store.getState>; // Тип всего состояния
export type AppDispatch = typeof store.dispatch; // Тип функции dispatch