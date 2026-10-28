# How To Organize Code with modules 
**To make app more clean we sperate part of logic in sperated files we call module**

## for example with one module 
**we creat new file call it sum.ts and make function inside it call sum and import and use it inside main fille**



```ts
// index.ts
import { sum } from "./sum";

const answer = sum(9,7);

console.log(`result : ${answer}`)

```

```ts
// sum.ts
function sum(num1:number,num2:number):number{
  return num1 + num2 
}



export {sum};
//import will be import {sum} from sum.ts

// or default for file 
// export default sum;
// import will be | import sum from sum.ts

```
----
## another example with multiple functions and files 






