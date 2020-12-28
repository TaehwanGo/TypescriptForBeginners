import * as CryptoJS from "crypto-js";
import { type } from "os";

class Block{
    // sayHello() => "hello"; // 이렇게 만든 method는 클래스를 생성해야만 사용 가능 
    static calculateBlockHash = (
        index:number, 
        previousHash: string, 
        timestamp:number, 
        data:string
        ):string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString(); // Block.calculateBlockHash(...) 이런식으로 클래스 생성없이 바로 사용가능
    
    static validateStructure = (aBlock:Block) : boolean => 
        typeof aBlock.index === "number" && 
        typeof aBlock.hash === "string" && 
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.timestamp === "number" &&
        typeof aBlock.data === "string"; // 들어온 블록의 구조가 유효한지 아닌지를 판단
    
    public index:number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    constructor(
        index:number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }

    
}

const genesisBlock:Block = new Block(0, "20202020", "", "Hello", 123456);

let blockChain: Block[] = [genesisBlock];

const getBlockChain = ():Block[] => blockChain;

const getLatestBlock = ():Block => blockChain[blockChain.length - 1];

const getNewTimeStamp = ():number => Math.round(new Date().getTime() / 1000);

// 새로운 블록을 생성하는 함수
const createNewBlock = (data:string):Block => {
    const previousBlock:Block = getLatestBlock();
    const newIndex:number = previousBlock.index + 1;
    const newTimestamp : number = getNewTimeStamp();
    const newHash : string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);

    const newBlock : Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);

    return newBlock;
}

// console.log(createNewBlock("hello"), createNewBlock("bye-bye"));

const isBlockValid = (candidateBlock:Block, previousBlock:Block):boolean => { // 유효한지 검사
    if(!Block.validateStructure(candidateBlock)){
        return false;
    } else if(previousBlock.index + 1 !== candidateBlock.index){
        return false;
    } else if(previousBlock.hash !== candidateBlock.previousHash){
        return false;
    } else if(true){ // 블록의 해쉬가 유효한지 확인하기 위해 따로 해쉬를 계산해서 들어온 블록의 해쉬가 실제로 있는지 체크 

    }
}

export{};