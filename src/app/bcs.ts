export class Bcs {

  constructor(
    public examQuestion: string,
    public optionOne: string,
    public optionTwo: string,
    public optionThree: string,
    public optionFour: string,
    public rightAnswer: number,
    public category: String,
    public remark?: string
  ) {}

  // let bcsQuestion = new Bcs('examQuestion one','op1','op2','op3','op4',2,'NaN');
  // console.log(bcsQuestion);
}
