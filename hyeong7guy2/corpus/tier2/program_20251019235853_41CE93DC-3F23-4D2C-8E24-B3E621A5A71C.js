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
            new F11();
            const v22 = Symbol.iterator;
            const v30 = {
                [v22]() {
                    const v28 = {
                        next() {
                            return { done: 10 };
                        },
                        a: 0.5671239589855639,
                        [Symbol]() {
                        },
                    };
                    for (let v29 = 0; v29 < 5; v29++) {
                    }
                    return v28;
                },
            };
            const v33 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v33, ...v30);
        }
        f7();
        f7(0.5671239589855639);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
    function f38() {
        return F2;
    }
    WebAssembly.instantiateStreaming(this, Symbol, a5).catch(f38);
}
const v41 = new F2(0.5671239589855639, Symbol);
class C42 {
    static [v41](a44, a45, a46) {
    }
}
