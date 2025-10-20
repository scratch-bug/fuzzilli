function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v23 = {
        construct(a6, a7) {
            const v9 = class extends Int8Array {
            }
            function f10() {
                function f11(a12, a13) {
                    f11 = a12;
                    let v15;
                    try { v15 = this["toUTCString"](); } catch (e) {}
                    (128n)[v15];
                    return f11;
                }
                new Worker(f11, { type: "function" });
                return Worker;
            }
            v9.constructor = f10;
            v9.constructor(a6);
            return Reflect;
        },
    };
    function f25() {
        return 128n;
    }
    const v26 = new Proxy(f25, v23);
    Reflect.construct(v26, Proxy);
}
new F1(128n, 128n);
