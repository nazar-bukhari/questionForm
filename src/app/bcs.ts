export class Bcs {

  constructor(
    public question: string,
    public optionOne: string,
    public optionTwo: string,
    public optionThree: string,
    public optionFour: string,
    public rightAnswer: number,
    public remark?: string
  ) {}

  // let bcsQuestion = new Bcs('question one','op1','op2','op3','op4',2,'NaN');
  // console.log(bcsQuestion);
}
