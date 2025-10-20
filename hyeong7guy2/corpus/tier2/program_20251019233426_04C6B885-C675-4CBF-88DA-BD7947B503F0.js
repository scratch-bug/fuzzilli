const v0 = [-Infinity,0.05210531125350726,4.0,-188091.19692544593];
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new Int16Array(127);
function f10() {
    return v9;
}
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    function f15() {
        function f16(a17) {
            function F18(a20, a21, a22) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F18.constructor = f10;
            const v23 = F18.constructor;
            const v25 = +-1899023956;
            !F11;
            v0 * v25;
            const v28 = v23();
            const v29 = v28[15];
            const v30 = v28[15];
            function f31() {
                eval();
            }
            function f34(a35, a36, a37, a38) {
                return { ...v28 };
            }
            const v40 = f34(127, v29, v30);
            f34(f16, F1, f34(f31, v30, v40, v40), f16);
        }
        f16(v0);
        f16(v0);
        %OptimizeMaglevOnNextCall(f16);
        return f16;
    }
    Object.defineProperty(this, "toString", { get: f15 });
}
const v45 = new F11();
v45.toString();
