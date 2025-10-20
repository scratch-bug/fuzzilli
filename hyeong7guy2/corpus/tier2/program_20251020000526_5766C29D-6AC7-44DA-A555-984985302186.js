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
            const v16 = F11.constructor;
            const v17 = v16();
            function F18(a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v22 = new F18(v16, this);
            const t18 = v22.constructor;
            const v24 = new t18(f9, a6, f3, F4, Int16Array);
            const t20 = v24.constructor;
            new t20(f3, v22);
            const v27 = v17[15];
            const v28 = -v27;
            ~v27;
            const v30 = v17[15];
            eval(v28);
            return v30;
        }
        f9();
        f9();
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v35 = new F4(127, Int16Array);
v35.toString(F4, F4, v2);
