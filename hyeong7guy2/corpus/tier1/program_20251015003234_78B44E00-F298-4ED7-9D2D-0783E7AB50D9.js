const v23 = {
    construct(a1, a2) {
        function f3(a4, a5) {
            class C7 extends Array {
            }
            const v8 = new C7();
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                function f13() {
                    function f14(a15) {
                        v8[1] **= Array;
                        return a4;
                    }
                    f14(a12);
                    f14();
                    %OptimizeMaglevOnNextCall(f14);
                    return f14;
                }
                Object.defineProperty(this, "toString", { get: f13 });
            }
            const v18 = new F9(f3, f3);
            return v18;
        }
        a1.toString = f3;
        const t22 = a1.toString().toString;
        t22();
        return Reflect;
    },
};
function f25() {
    return Proxy;
}
const v26 = new Proxy(f25, v23);
const v28 = Array.prototype;
Object.defineProperty(v28, 1612, { configurable: true, value: v28 });
let v29 = 1;
v29--;
v28.length = v29;
Reflect.construct(v26, v26);
