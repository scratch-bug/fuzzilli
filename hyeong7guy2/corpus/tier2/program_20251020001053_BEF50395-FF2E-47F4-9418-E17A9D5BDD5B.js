function f2() {
    const v4 = [31215.68500756973,6.53257897060967];
    v4.flat();
    v4[15] |= 256;
    return v4;
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            function F13(a15, a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F13.constructor = f2;
            const v18 = F13.constructor;
            new v18();
            const v20 = v18(v18);
            v20[15];
            const v22 = v20.unshift(211);
            v22 * v22;
            const v24 = v20[15];
            const v25 = v24 ?? v24;
            function f26() {
                Symbol[this] = v24;
                return F13;
            }
            function f27(a28, a29, a30, a31) {
                function f32(a33, a34, a35) {
                    v25[3] **= a35;
                    const v40 = {
                        set a(a38) {
                            const t0 = {};
                            t0.g = v22;
                        },
                    };
                    return F6;
                }
                f32(a30, a28, v18);
                f32(v20);
                return a8;
            }
            return f11;
        }
        f11(F6);
        f11();
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v45 = new F6();
v45.toString(v45);
