function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v10 = Symbol.iterator;
            const v26 = {
                [v10]() {
                    const v15 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    function F16(a18, a19) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f20() {
                            function f21(a22) {
                                [-59161,-38111,-8,41058,-10044,-1255646682,256];
                                return this;
                            }
                            return f21;
                        }
                        Object.defineProperty(this, "toString", { get: f20 });
                    }
                    const v24 = new F16();
                    v24.toString();
                    return v15;
                },
            };
            const v29 = new Int16Array(Date, 882);
            new Date(WeakSet, Date, 882, ...v29, ...v26);
        }
        f6();
        f6(Symbol);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v33 = new F1(Symbol, F1);
class C34 {
    static [v33](a36, a37, a38) {
    }
}
