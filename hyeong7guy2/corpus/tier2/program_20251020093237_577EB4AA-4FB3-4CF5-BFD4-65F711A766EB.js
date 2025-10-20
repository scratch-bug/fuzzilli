const v0 = class {
}
class C4 {
}
for (let i = 0; i < 5; i++) {
    const v8 = Symbol.iterator;
    const v33 = {
        [v8]() {
            const v32 = {
                next() {
                    function f11(a12, a13, a14, a15) {
                        const v27 = {
                            n(a17, a18, a19, a20) {
                                eval(a15);
                                return this;
                            },
                            valueOf() {
                                return this;
                            },
                            construct(a25, a26) {
                                return v0;
                            },
                        };
                        return v27;
                    }
                    f11(v0, v0, 6, f11(v0, C4, -65536, f11(v0, v0, -36892, f11())));
                },
            };
            return v32;
        },
    };
    const v36 = new Int16Array(882);
    function f37() {
        const v38 = new Date(WeakSet, Date, 882, ...v36, ...v33);
        return v38;
    }
    %OptimizeFunctionOnNextCall(f37);
    try { f37(); } catch (e) {}
}
