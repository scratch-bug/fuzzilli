const v4 = new SharedArrayBuffer(2311, { maxByteLength: 1073741825 });
const v6 = new Uint8ClampedArray(v4);
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11(a12, a13, a14) {
        function F15(a17, a18, a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            v6[1073741824];
        }
        new F15(F15, v6, a14, a12);
        return F15;
    }
    f11(this, F7, f11);
    %OptimizeFunctionOnNextCall(f11);
}
const v24 = new F7();
const t16 = v24.constructor;
new t16();
new F7();
