function concatStrings(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    return "".concat(a, ",").concat(b);
}
var employeeName = concatStrings("Hello", "This", "is", "Typescript");
console.log(employeeName);
