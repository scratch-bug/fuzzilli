function f2() {
    return f2;
}
function f3() {
    function f4() {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            function f9() {
                function f10(a11) {
                    const v12 = typeof a7;
                    v12 === "boolean";
                    Math.pow("boolean", v12);
                    eval();
                }
                f10(f4);
                f10();
                %OptimizeMaglevOnNextCall(f10);
                return f10;
            }
            Object.defineProperty(this, "toString", { get: f9 });
        }
        const v21 = new F5();
        class C22 {
            static [v21](a24, a25, a26) {
            }
        }
        return { done: WeakMap };
    }
    return { next: f4 };
}
const v29 = Symbol.iterator;
f2.bind(null, ...{ [v29]: f3 });
