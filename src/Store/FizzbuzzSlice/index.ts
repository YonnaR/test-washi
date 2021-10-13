import { createSlice, Slice, SliceCaseReducers } from '@reduxjs/toolkit';
import {name, initialState, IFizzbuzzState}  from './constant';
import Fizzbuzz from './FizzBuzz';

const FizzbuzzSlice : Slice<IFizzbuzzState, SliceCaseReducers<IFizzbuzzState>, "fizzbuzz"> = createSlice({
  name,
  initialState,
  reducers: {
    input(state, {payload}){
      return {
        ...state,
        data:{
          ...state.data,
          [payload.name]: payload.value,
        }
      }
    },
    validate(state){
      let Result = new Fizzbuzz(state.data);
      return {
        ...state,
        result: {
          output: Result.getResult(),
          totalCount: Result.getTotalCount(),
          fizzCount: Result.getFizzCount(),
          buzzCount: Result.getBuzzCount(),
          fizzbuzzCount: Result.getBFizzBuzzCount(),
          normalCount: Result.getNormalCount()
        }
      };
    },
    reset() {
      return initialState;
    }
  },
});


export const { input, validate, reset } = FizzbuzzSlice.actions;
export default FizzbuzzSlice.reducer;