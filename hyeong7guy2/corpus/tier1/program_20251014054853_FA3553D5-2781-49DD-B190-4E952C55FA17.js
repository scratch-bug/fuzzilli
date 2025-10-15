function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        try { Error.captureStackTrace(); } catch (e) {}
        return { done: true };
    }
    return { next: f3 };
}
const v9 = Symbol.iterator;
f1.bind(null, ...{ [v9]: f2 });
