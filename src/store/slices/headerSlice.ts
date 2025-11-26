import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Интерфейс описывает структуру конфигурации хедера
// Какие настройки можно менять для хедера
export interface HeaderConfig {
  preset: string; // для поиска по пресету
  background: string;
  showText: boolean;
  showBackButton: boolean;
  borderBottom?: boolean;
}

// Создаем предустановленные конфигурации для разных страниц
// Это объект где ключ - название пресета, значение - настройки хедера
export const headerPresets: Record<string, HeaderConfig> = {
  // Стандартный хедер
  default: {
    preset: "default",
    background: "white",
    showText: true,
    showBackButton: true,
    borderBottom: true,
  },
  // Хедер для страниц
  settings: {
    preset: "settings",
    background: "#667eea",
    showText: true,
    showBackButton: true,
    borderBottom: false,
  },
  confirm: {
    preset: "confirm",
    background: "white",
    showText: false,
    showBackButton: false,
    borderBottom: false,
  },
  succes: {
    preset: "succes",
    background: "white",
    showText: false,
    showBackButton: true,
    borderBottom: false,
  },
  card: {
    preset: "card",
    background: "white",
    showText: true,
    showBackButton: true,
    borderBottom: false,
  },
};

// Интерфейс описывает полное состояние хедера в Redux
interface HeaderState {
  config: HeaderConfig; // Текущая конфигурация хедера
}

// Начальное состояние - используем дефолтный пресет
const initialState: HeaderState = {
  config: headerPresets.default,
};

// Создаем "слайс" - часть состояния Redux с actions и reducer
const headerSlice = createSlice({
  name: "header", // Уникальное имя для этого слайса
  initialState, // Начальное состояние
  reducers: {
    // Action для установки предустановленного конфига
    // Принимает название пресетов - сотояний ('default', 'settings', etc.)
    setHeaderPreset: (
      state,
      action: PayloadAction<keyof typeof headerPresets>
    ) => {
      // Находим конфиг по названию пресета и сохраняем в состояние
      state.config = headerPresets[action.payload];
    },

    // Action для установки кастомного конфига
    // Принимает полный объект конфигурации
    setHeaderConfig: (state, action: PayloadAction<HeaderConfig>) => {
      state.config = action.payload;
    },

    // Action для сброса хедера к дефолтному состоянию
    resetHeader: (state) => {
      state.config = headerPresets.default;
    },
  },
});

// Экспортируем actions для использования в компонентах
export const { setHeaderPreset, setHeaderConfig, resetHeader } =
  headerSlice.actions;

// Экспортируем редюсер для подключения в store
export default headerSlice.reducer;
