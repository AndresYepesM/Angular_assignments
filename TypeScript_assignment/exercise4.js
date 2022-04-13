function addWithStrings(arg1, arg2) {
    if (typeof (arg1) && typeof (arg2) === 'number') {
        return arg1 + arg2;
    }
    else if (typeof (arg1) && typeof (arg2) === 'string') {
        return arg1 + arg2;
    }
    else {
        return arg1 + arg2;
    }
    ;
}
console.log(addWithStrings('abc', 1));
