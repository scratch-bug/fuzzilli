function f2() {
    function f3() {
        function f6() {
            return f3;
        }
        function f7(a8) {
            return f3;
        }
        Object.defineProperty(Error, "prepareStackTrace", { configurable: true, enumerable: true, get: f6, set: f7 });
        Error().stack;
        return { done: true };
    }
    return { next: f3 };
}
const v13 = Symbol.iterator;
Date.bind(null, ...{ [v13]: f2 });
