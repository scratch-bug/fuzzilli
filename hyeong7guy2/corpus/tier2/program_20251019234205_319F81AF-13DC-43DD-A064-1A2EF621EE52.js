function f1() {
    const v3 = [31215.68500756973,6.53257897060967];
    v3[15] |= 256;
    return v3;
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            function F11(a13, a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F11.constructor = f1;
            const v16 = F11.constructor;
            const v17 = v16(v16, v16, f8, v16);
            v17.unshift(211);
            const v19 = v17[15];
            v19 + v19;
            return f9;
        }
        f9();
        f9();
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v23 = new F4(F4, 211);
v23.toString(211, 211);
