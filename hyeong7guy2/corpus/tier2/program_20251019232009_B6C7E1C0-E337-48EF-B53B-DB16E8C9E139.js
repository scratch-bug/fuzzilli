function f0() {
    const v2 = [31215.68500756973,6.53257897060967];
    v2[15] |= 256;
    return v2;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            function F10(a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F10.constructor = f0;
            const v15 = F10.constructor;
            const v16 = v15();
            const v17 = v16[15];
            const v18 = v17 | v17;
            let v19 = v18 - v18;
            v19++;
            v16[15];
            eval();
            return v15;
        }
        f8(f8);
        f8(F3);
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v26 = new F3(f0, f0);
v26.toString();
