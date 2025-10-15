class C1 {
}
function f2() {
    function f3() {
        function f6() {
            return Symbol;
        }
        function f7() {
            function f8() {
                Error().stack;
                return { done: 1809 };
            }
            return { next: f8 };
        }
        const v14 = Symbol.iterator;
        f6.bind(null, ...{ [v14]: f7 });
    }
    f3();
    return f3;
}
function f19(a20) {
    return a20;
}
Object.defineProperty(C1, "toString", { configurable: true, enumerable: true, get: f2, set: f19 });
class C21 {
}
const v22 = new BigInt64Array();
v22.slice(C21, C1);
