const v22 = {
    construct(a1, a2) {
        function F3(a5, a6) {
            if (!new.target) { throw 'must be called with new'; }
            function f7() {
                function f8(a9) {
                    const v11 = Math.sqrt(F3);
                    new F3();
                    return v11;
                }
                f8(f7);
                f8(a2);
                %OptimizeMaglevOnNextCall(f8);
                return f8;
            }
            Object.defineProperty(this, "toString", { get: f7 });
        }
        const v15 = new F3(a2, F3);
        class C16 {
            static [v15](a18, a19, a20) {
            }
        }
        return Reflect;
    },
};
function f24() {
    return f24;
}
const v25 = new Proxy(f24, v22);
Reflect.construct(v25, f24);
