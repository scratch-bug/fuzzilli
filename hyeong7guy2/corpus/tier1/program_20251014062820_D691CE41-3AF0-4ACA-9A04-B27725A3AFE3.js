function f2() {
    function f3() {
        Error.stackTraceLimit = Error;
        Error(f3);
        return { done: true };
    }
    return { next: f3 };
}
const v9 = Symbol.iterator;
Date.bind(null, ...{ [v9]: f2 });
