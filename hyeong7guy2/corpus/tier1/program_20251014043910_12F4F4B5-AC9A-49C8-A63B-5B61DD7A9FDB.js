function f1() {
    return f1;
}
function f2() {
    function f3() {
        function f5() {
            Error.prepareStackTrace = f5;
            return Error().stack;
        }
        f5();
        return { done: true };
    }
    return { next: f3 };
}
const v12 = Symbol.iterator;
f1.bind(null, ...{ [v12]: f2 });
