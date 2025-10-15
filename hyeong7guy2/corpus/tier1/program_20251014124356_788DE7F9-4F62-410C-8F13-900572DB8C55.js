const v3 = new Int32Array(512);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9) {
        v3[7];
    }
    f8();
    f8();
    %OptimizeMaglevOnNextCall(f8);
    f8();
}
const v15 = new F4();
const t12 = v15.constructor;
new t12();
