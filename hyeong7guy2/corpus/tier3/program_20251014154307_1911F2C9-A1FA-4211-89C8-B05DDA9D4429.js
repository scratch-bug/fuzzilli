const v3 = new Int32Array(512);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9) {
        let v10 = v3[7];
        return v10--;
    }
    f8();
    const v13 = f8(F4);
    %OptimizeMaglevOnNextCall(f8);
    f8(v13);
}
new F4(7, 7);
