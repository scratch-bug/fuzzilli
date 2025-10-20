function f0() {
    const v2 = [31215.68500756973,6.53257897060967];
    const v3 = v2.flat(256);
    v3[1] = v3;
    v2[15] |= 256;
    return f0;
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            function F11(a13, a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F11.constructor = f0;
            const t15 = F11.constructor;
            const v17 = new t15();
            return v17;
        }
        f9();
        f9(a6);
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v20 = new F4(f0, f0);
v20.toString();
