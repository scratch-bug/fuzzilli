function f0() {
    return [31215.68500756973,6.53257897060967];
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function F9(a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F9.constructor = f0;
            const t11 = F9.constructor;
            const v16 = t11()[15];
            const v17 = v16 | v16;
            v17 * v17;
            let v19 = v17 - v17;
            let v20 = v19++;
            v20--;
            eval(a5);
            return a5;
        }
        f7(f7);
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v26 = new F2();
v26.toString();
