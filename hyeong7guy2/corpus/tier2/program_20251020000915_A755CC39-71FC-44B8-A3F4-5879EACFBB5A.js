function f3() {
    function f4() {
        function f6() {
            return 755402468;
        }
        function f7(a8) {
            return a8;
        }
        Object.defineProperty(Error, "prepareStackTrace", { configurable: true, enumerable: true, get: f6, set: f7 });
        Error().stack;
        return { done: f4 };
    }
    return { next: f4 };
}
const v13 = Symbol.iterator;
Date.bind(null, ...{ [v13]: f3 });
