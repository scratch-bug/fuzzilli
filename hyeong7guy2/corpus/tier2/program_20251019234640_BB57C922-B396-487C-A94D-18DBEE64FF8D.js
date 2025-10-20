function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v20 = {
        construct(a5, a6) {
            const v8 = class extends Int8Array {
            }
            function f9() {
                function f10(a11, a12) {
                    f10 = a11;
                    [];
                    return a5;
                }
                new Worker(f10, { type: "function" });
                return f10;
            }
            v8.constructor = f9;
            v8.constructor(Int8Array);
            return Reflect;
        },
    };
    function f22() {
        return v20;
    }
    const v23 = new Proxy(f22, v20);
    Reflect.construct(v23, Proxy);
}
new F0(F0, F0);
