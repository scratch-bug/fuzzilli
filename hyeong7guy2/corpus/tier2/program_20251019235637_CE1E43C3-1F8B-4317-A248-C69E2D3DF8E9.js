function f0() {
    return f0;
}
const v2 = WebAssembly.instantiateStreaming();
v2.catch(f0);
function f4() {
    const t6 = [31215.68500756973,6.53257897060967];
    t6[15] |= 256;
    return v2;
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11() {
        function f12(a13) {
            function F14(a16, a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F14.constructor = f4;
            const v19 = F14.constructor;
            const v20 = [0.6689253274313277,-2.0,-2.220446049250313e-16];
            function f21(a22) {
                let v24 = -639820461 * -639820461;
                v24--;
                const t22 = v20.constructor;
                t22(v24, f12);
                return f0;
            }
            v19(WebAssembly, f21(f12, F14));
            return f11;
        }
        f12(a9);
        f12();
        %OptimizeMaglevOnNextCall(f12);
        return f12;
    }
    Object.defineProperty(this, "toString", { get: f11 });
}
const v32 = new F7(v2, f4);
v32.toString(f0);
