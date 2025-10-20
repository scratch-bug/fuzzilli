function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v20 = {
        construct(a5, a6) {
            const v8 = class extends Int8Array {
            }
            function f9() {
                function f10(a11, a12) {
                    f10 = a11;
                    for (let v13 = 0; v13 < 5; v13++) {
                    }
                    return a12;
                }
                new Worker(f10, { type: "function" });
                return a6;
            }
            v8.constructor = f9;
            v8.constructor();
            return Reflect;
        },
    };
    function f22() {
        return F0;
    }
    const v23 = new Proxy(f22, v20);
    Reflect.construct(v23, Proxy);
}
new F0();
