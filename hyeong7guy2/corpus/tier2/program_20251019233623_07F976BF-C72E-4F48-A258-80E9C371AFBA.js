function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a13;
            }
            const v14 = new F10();
            const v15 = v14.e;
            v15 >>> v15;
            const v19 = Symbol.iterator;
            const v27 = {
                [v19]() {
                    F0 <= 8n;
                    const v26 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v26;
                },
            };
            const v30 = new Int16Array(v14);
            new Date(WeakSet, Date, 882, ...v30, ...v27);
        }
        f8(f7);
        f8(a5);
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v34 = new F3();
class C35 {
    static [v34](a37, a38, a39) {
    }
}
