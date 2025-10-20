class C2 {
}
function f3() {
    function f4() {
        function f6() {
            return Symbol;
        }
        function f7() {
            function f8() {
                const v10 = Error();
                try { Reflect.construct(v10); } catch (e) {}
                return { done: 1809 };
            }
            return { next: f8 };
        }
        const v15 = Symbol.iterator;
        f6.bind(null, ...{ [v15]: f7 });
    }
    return f4;
}
function f19(a20) {
    return f3;
}
Object.defineProperty(C2, "toString", { configurable: true, enumerable: true, get: f3, set: f19 });
class C21 {
}
const v22 = new BigInt64Array();
v22.slice(C21, C2);
