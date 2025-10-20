function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v19 = {
        construct(a5, a6) {
            const v8 = class extends Int8Array {
            }
            function f9() {
                function f10(a11, a12) {
                    f10 = a11;
                    try {
                    } finally {
                    }
                    return a12;
                }
                new Worker(f10, { type: "function" });
                return f10;
            }
            v8.constructor = f9;
            v8.constructor();
            return Reflect;
        },
    };
    function f21() {
        return F0;
    }
    const v22 = new Proxy(f21, v19);
    Reflect.construct(v22, Proxy);
}
new F0(F0, F0);
