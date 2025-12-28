// интерфейс для компонентов DATA
export interface DataContent {
  id: string;
  icon?: string;
  label: string;
  path?: string;
  text?: string;
  count?: number;
}

export interface DataBalance {
  id: string;
  label: string;
  key: 'USD' | 'EUR' | 'CNY';
}