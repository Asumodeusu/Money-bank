import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Создаем типизированные версии стандартных хуков React-Redux
// Это нужно для TypeScript чтобы он понимал типы нашего состояния
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;