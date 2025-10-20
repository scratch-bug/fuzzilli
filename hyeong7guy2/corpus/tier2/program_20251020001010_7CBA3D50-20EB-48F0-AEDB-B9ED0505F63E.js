const v3 = new Uint32Array(Uint32Array);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            function f11(a12) {
                v3[2] &= 9007199254740992;
                class C13 {
                }
                function f14(a15, a16) {
                    a10[a12] *= -1e-15;
                    switch (C13) {
                    }
                }
            }
            f11.call();
            f8.constructor = f11;
            f8.constructor.call(F4, a6, F4);
            return 9007199254740992;
        }
        f9(f9);
        f9(f9);
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v22 = new F4(-1e-15, -1e-15);
v22.toString();
