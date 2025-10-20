const v0 = class {
}
class C4 {
}
for (let i = 0; i < 5; i++) {
    const v8 = Symbol.iterator;
    const v29 = {
        [v8]() {
            const v28 = {
                next() {
                    function f11(a12, a13, a14, a15) {
                        const v23 = {
                            n(a17, a18, a19, a20) {
                                eval();
                                return a15;
                            },
                        };
                        return v23;
                    }
                    f11(v0, v0, 6, f11(v0, C4, -65536, f11(v0, v0, -36892, f11())));
                },
            };
            return v28;
        },
    };
    const v32 = new Int16Array(6, 882, -65536);
    function f33() {
        new Date(WeakSet, Date, 882, ...v32, ...v29);
        return v8;
    }
    %OptimizeFunctionOnNextCall(f33);
    try { f33(); } catch (e) {}
}
