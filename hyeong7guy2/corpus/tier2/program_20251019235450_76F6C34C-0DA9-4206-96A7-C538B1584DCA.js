function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v12 = new F8();
            const v13 = v12.e;
            v13 >>> v13;
            const v18 = Symbol.iterator;
            const v26 = {
                [v18]() {
                    new Int16Array(a4);
                    const v25 = {
                        next() {
                            return { done: 10 };
                        },
                        __proto__: this,
                    };
                    return v25;
                },
            };
            new Date(WeakSet, Date, 882, ...v26, ...v26);
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    f5();
    Object.defineProperty(this, "toString", { get: f5 });
}
const v35 = new SharedArrayBuffer(3, { maxByteLength: 255 });
const v37 = new Uint8Array(v35);
const v38 = new F1();
const t36 = v38.constructor;
new t36(v37, v37);
class C41 {
    static [v38](a43, a44, a45) {
    }
}
