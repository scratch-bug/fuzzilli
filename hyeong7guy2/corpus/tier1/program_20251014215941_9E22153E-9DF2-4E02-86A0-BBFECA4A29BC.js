const v23 = {
    construct(a1, a2) {
        function F3(a5, a6) {
            if (!new.target) { throw 'must be called with new'; }
            function f7() {
                function f8(a9) {
                    let v11 = 8.916149175916658;
                    const v12 = v11++;
                    Math.abs(v11);
                    return v12;
                }
                f8(f7);
                f8();
                %OptimizeMaglevOnNextCall(f8);
                return f8;
            }
            Object.defineProperty(this, "toString", { get: f7 });
        }
        const v16 = new F3(a1, a2);
        class C17 {
            static [v16](a19, a20, a21) {
            }
        }
        return Reflect;
    },
};
function f25() {
    return v23;
}
const v26 = new Proxy(f25, v23);
Reflect.construct(v26, f25);
