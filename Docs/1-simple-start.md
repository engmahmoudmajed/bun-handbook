# How To work ( its familair ) 



## To init Project 
```bash 
# in the directory you choose to be project run next
bun init 
```


## install packege
```bash
# install and sync all packege  in existing project
bun install
# insrall specific packege 
bun install packegename
# or for add new packege
bun add packegename
```

## To Run Something without install
```bash
bunx packgename argument 
```

## To Start and Run We 
### first way We can Run File Directly
```bash
bun index.ts
```



## To run with watch mode
**edit file while its stay wait for any change and save for run **
```bash
bun --watch index.ts
```
## To run with hot reload mode
**edit file while its stay wait for any change and save for run **
```bash
bun --hot index.ts
```



### Second way add script to make run it more easair

#### the packege.json
**we add next line  "dev":"bun index.ts" to make bun run file with sipmle command**
```json
{
  "name": "bun-handbook",
  "module": "index.ts",
  "type": "module",
  "scripts": {
    "typecheck": "bun check",
    "dev":"bun index.ts"
  },
  "devDependencies": {
    "@types/bun": "latest"
  },
  "peerDependencies": {
    "typescript": "^7"
  }
}
```

### the index.ts where we write code 

```ts
console.log("Hello via Bun!");
```

## Run Script
```bash
bun run scriptname 
```








