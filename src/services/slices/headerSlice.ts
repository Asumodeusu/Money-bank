import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderState {
  variant: 'default' | 'settings';
  title?: string;
  showBackButton: boolean;
}

const initialState: HeaderState = {
  variant: 'default',
  showBackButton: true,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeaderVariant: (state, action: PayloadAction<'default' | 'settings'>) => {
      state.variant = action.payload;
    },
    setHeaderTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setShowBackButton: (state, action: PayloadAction<boolean>) => {
      state.showBackButton = action.payload;
    },
    resetHeader: (state) => {
      state.variant = 'default';
      state.title = undefined;
      state.showBackButton = true;
    },
  },
});

export const { 
  setHeaderVariant, 
  setHeaderTitle, 
  setShowBackButton, 
  resetHeader 
} = headerSlice.actions;

export default headerSlice.reducer;