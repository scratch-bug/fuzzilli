const v0 = [1157969007,9007199254740991,5555,-530405801,2147483648,4];
function f2() {
    return Symbol;
}
function f3() {
    function f4() {
        Error().toString.call(v0);
        return { done: true };
    }
    return { next: f4 };
}
const v12 = Symbol.iterator;
f2.bind(null, ...{ [v12]: f3 });
