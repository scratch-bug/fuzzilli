function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                function f11(a12, a13, a14) {
                    class C15 {
                    }
                    C15.h = a13;
                    C15.h = a10;
                    const v20 = Symbol.iterator;
                    const v32 = {
                        [v20]() {
                            with (d8) {
                                const v24 = test.FastCAPI;
                                const v25 = new v24(v24, v24, a2, d8, this);
                                const v26 = v25.throw_no_fallback;
                                try { v26(); } catch (e) {}
                            }
                            const v31 = {
                                next() {
                                    return { done: 10000 };
                                },
                            };
                            return v31;
                        },
                    };
                    const v34 = new Int16Array();
                    new Date(WeakSet, Date, -128, ...v34, ...v32);
                    return a9;
                }
                f11(this, F0, a6);
                %OptimizeFunctionOnNextCall(f11);
            }
            const v37 = new F7();
            const v38 = v37.constructor;
            new v38(v38, a3);
        }
        f5();
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v41 = new F0();
class C42 {
    static [v41](a44, a45, a46) {
    }
}
