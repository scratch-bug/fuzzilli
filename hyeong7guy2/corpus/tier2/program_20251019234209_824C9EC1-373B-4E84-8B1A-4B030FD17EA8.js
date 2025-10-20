function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                a14--;
                this.e = a14;
            }
            const v16 = new F11("2147483647", -3612);
            const v17 = v16.e;
            v17 - v17;
            new F11(f7, v16);
            const v22 = Symbol.iterator;
            const v31 = {
                [v22]() {
                    const v30 = {
                        next() {
                            const v26 = { done: 10 };
                            ([1024,257,1073741825,10,2147483649,27668,9223372036854775807,10,268435456,-624873012])["pop"]();
                            return v26;
                        },
                        a: 0.5671239589855639,
                    };
                    return v30;
                },
            };
            const v34 = new Int16Array(Symbol);
            new Date(WeakSet, Date, 882, ...v34, ...v31);
        }
        f7(f7());
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
    function f39() {
        return f39;
    }
    WebAssembly.instantiateStreaming(WebAssembly, Symbol).catch(f39);
}
const v42 = new F2(Symbol, Symbol);
class C43 {
    static [v42](a45, a46, a47) {
    }
}
