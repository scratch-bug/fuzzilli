function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        function f6() {
            return f3;
        }
        Object.defineProperty(Error, "toString", { configurable: true, get: f6 });
        try { Error(Error); } catch (e) {}
        return { done: true };
    }
    return { next: f3 };
}
const v10 = Symbol.iterator;
f1.bind(null, ...{ [v10]: f2 });
