const v3 = new Int32Array(512);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9) {
        v3[7];
        return f8;
    }
    f8();
    f8();
    %OptimizeMaglevOnNextCall(f8);
    f8();
}
new F4();
