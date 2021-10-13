import { IFormData } from './constant';

export const DEFAULT_FIZZ_STRING = 'Fizz',
  DEFAULT_BUZZ_STRING = 'Buzz',
  DEFAULT_LIMIT = 100,
  DEFAULT_NUMBER_ONE = 3,
  DEFAULT_NUMBER_TWO = 5;

export default class FizzBuzz {
  private buzzString :string;
  private fizzString :string;
  private fizzbuzzString :string;
  private limit: number;
  private number1 :number;
  private number2 :number;
  private resultArray :any[] = [];

  private fizzBuzzStep( el :number) :string|number {
    if(
      (el % this.number1 === 0)
      && (el % this.number2 === 0)
    ) return this.fizzbuzzString;
    else if(el % this.number1 === 0) return this.fizzString;
    else if(el % this.number2 === 0) return this.buzzString;
    return el;
  };

  private runFizzbuzz() {
    for( let i = 1 ; i < this.limit ; i++) {
      this.resultArray.push(this.fizzBuzzStep(i));
    };
  };

  constructor({
    buzzString,
    fizzString,
    limit,
    number1,
    number2
  } :IFormData){
    this.buzzString = buzzString !== "" ? buzzString : DEFAULT_BUZZ_STRING;
    this.fizzString= fizzString !== "" ? fizzString : DEFAULT_FIZZ_STRING;;
    this.limit = limit !== 0 ? limit : DEFAULT_LIMIT;
    this.number1 = number1 !== 0 ? number1 : DEFAULT_NUMBER_ONE;
    this.number2 = number2 !== 0 ? number2 : DEFAULT_NUMBER_TWO;
    this.fizzbuzzString = this.fizzString + this.buzzString;
    this.runFizzbuzz();
  };

  /**
   * getResults
   */
  public getResult() :any[]{
    return this.resultArray;
  };

  public getFizzCount() :number {
    return this.resultArray.filter(el => el === this.fizzString).length;
  };

  public getBuzzCount() :number{
    return this.resultArray.filter(el => el === this.buzzString).length;
  };

  public getBFizzBuzzCount() :number {
    return this.resultArray.filter(el => el === this.fizzbuzzString).length;
  };

  public getNormalCount() :number {
    return (
      this.resultArray.length -
      this.getFizzCount() -
      this.getBuzzCount() -
      this.getBFizzBuzzCount()
    );
  }

  public getTotalCount() :number {
    return this.resultArray.length;
  };
}