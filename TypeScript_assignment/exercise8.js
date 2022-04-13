function testArguments(arg) {
    for (var i = 0; i < arg.length; i++) {
        console.log("".concat(i, " ").concat(arg[i]));
    }
    ;
}
var arg = [7];
testArguments(arg);
