function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        const v5 = { done: true };
        class C6 {
        }
        for (let i8 = 10, i9 = 10; i9; i9--) {
        }
        class C15 {
        }
        function f16() {
            function f17() {
                function F18(a20, a21) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                Object.defineProperty(F18, "entries", { value: C6 });
                const v22 = [1972049685,65535,536870889,4294967295,268435440,47326,-65536];
                function F23(a25, a26) {
                    if (!new.target) { throw 'must be called with new'; }
                    a26.prototype = a26;
                    function f27(a28, a29, a30) {
                        a28.entries;
                        a29.caller;
                        return a29;
                    }
                    f27(v22, f17);
                    f27(a25, a26);
                    %OptimizeFunctionOnNextCall(f27);
                }
                const v35 = new F23(F18, F23);
                const t32 = v35.constructor;
                new t32(F23, f17);
                const v38 = v35.constructor;
                new v38(v35, v35);
                new v38(f17, f17);
            }
            return f17;
        }
        function f41(a42) {
            return a42;
        }
        Object.defineProperty(C15, "toString", { configurable: true, enumerable: true, get: f16, set: f41 });
        class C43 {
        }
        const v45 = new BigInt64Array();
        v45.slice(C43, C15);
        return v5;
    }
    return { next: f3 };
}
const v48 = Symbol.iterator;
f1.bind(null, ...{ [v48]: f2 });
