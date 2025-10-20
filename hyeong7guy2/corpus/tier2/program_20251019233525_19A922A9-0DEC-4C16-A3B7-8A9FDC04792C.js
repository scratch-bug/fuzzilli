const v2 = 33598 >>> 44919085;
const v4 = [-2.2250738585072014e-308];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                a17--;
                this.e = a17;
            }
            const v19 = new F14("2147483647", -3612);
            const v20 = v19.e;
            v20 - v20;
            new F14();
            const v26 = Symbol.iterator;
            const v32 = {
                [v26]() {
                    const v31 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    v4[2565931757] ??= v2;
                    return v31;
                },
            };
            const v35 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v35, ...v32);
        }
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v37 = new F5();
class C38 {
    static [v37](a40, a41, a42) {
    }
}
class C43 {
    static [v37](a45, a46, a47) {
    }
    static [v37](a49, a50, a51) {
    }
}
