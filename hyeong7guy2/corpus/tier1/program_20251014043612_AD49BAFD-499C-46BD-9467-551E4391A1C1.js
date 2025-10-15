function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        Error.prepareStackTrace = Error;
        Error().stack;
        return { done: true };
    }
    return { next: f3 };
}
const v10 = Symbol.iterator;
f1.bind(null, ...{ [v10]: f2 });
