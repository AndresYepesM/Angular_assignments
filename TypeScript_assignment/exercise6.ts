function concatStrings(a: string, ...b: string[]) {
    return `${a},${b}`;
}

let employeeName = concatStrings("Hello", "This", "is", "Typescript");
console.log(employeeName);