export type IFormData ={
  fizzString: string,
  buzzString: string,
  number1 :number,
  number2 :number,
  limit: number,
};

export type IResulData= {
  output: any[]
  totalCount: number;
  fizzCount: number;
  buzzCount: number;
  fizzbuzzCount: number;
  normalCount: number;
} | null;

export interface IFizzbuzzState {
  data: IFormData;
  result: IResulData;
};

export const name = 'fizzbuzz';

export const initialState :IFizzbuzzState = {
  data: {
    fizzString: "",
    buzzString: "",
    number1: 0,
    number2: 0,
    limit: 0
  },
  result: null,
};