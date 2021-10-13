import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import FizzbuzzSlice from './FizzbuzzSlice';

const store = configureStore({
  reducer: {
    fizzbuzz: FizzbuzzSlice
  }
});

export type IAppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<IAppDispatch>();

export type IRootState = ReturnType<typeof store.getState>;
export default store;