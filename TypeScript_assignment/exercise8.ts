function testArguments(arg){

    for(let i = 0;i<arg.length;i++){
        console.log(`${i} ${arg[i]}`);
    };
}

let arg = [7]
testArguments(arg);