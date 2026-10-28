export default function sum(num1:number,num2:number):number{
  return num1 + num2 
}

function multiple(num1:number,num2:number):number{
  return num1 * num2
}


export {sum,multiple};
//import will be import {sum} from sum.ts

// or default for file 
// export default sum;
// import will be | import sum from sum.ts