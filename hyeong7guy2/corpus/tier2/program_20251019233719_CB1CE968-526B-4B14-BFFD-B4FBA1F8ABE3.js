const v2 = new Int16Array(127);
function f3() {
    return v2;
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            function F11(a13, a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F11.constructor = f3;
            const t12 = F11.constructor;
            const v17 = t12();
            try { v17.findLastIndex(); } catch (e) {}
            const v19 = v17[15];
            v19 >> v19;
            const v21 = v17[15];
            eval();
            return v21;
        }
        f9();
        f9();
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v26 = new F4();
v26.toString(Int16Array, v2);
