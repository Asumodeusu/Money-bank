import { useAppDispatch } from "../../store/hooks";
import { setHeaderPreset } from "../../store/slices/headerSlice";
import { useEffect } from "react";

export const useHeaderPreset = (preset: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Устанавливаем переданный пресет
    dispatch(setHeaderPreset(preset));
    // При размонтировании возвращаем дефолтный хедер
    return () => {
      dispatch(setHeaderPreset("default"));
    };
  }, [dispatch, preset]); // Добавляем preset в зависимости
};