function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v21 = {
        construct(a5, a6) {
            const v8 = class extends Int8Array {
            }
            function f9() {
                function f10(a11, a12) {
                    f10 = a11;
                    let v13 = 5596;
                    v13++;
                    return f10;
                }
                new Worker(f10, { type: "function" });
                return F0;
            }
            v8.constructor = f9;
            v8.constructor(this, this, v8, v8, F0);
            return Reflect;
        },
    };
    function f23() {
        return f23;
    }
    const v24 = new Proxy(f23, v21);
    Reflect.construct(v24, Proxy);
}
new F0();
