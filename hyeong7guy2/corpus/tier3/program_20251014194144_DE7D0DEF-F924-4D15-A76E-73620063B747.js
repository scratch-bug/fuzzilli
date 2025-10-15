const v3 = new Int32Array(512);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9) {
        const v10 = v3[7];
        v10 / v10;
    }
    f8(v3);
    const v13 = f8();
    %OptimizeMaglevOnNextCall(f8);
    f8(v13);
}
const v15 = new F4();
const t13 = v15.constructor;
new t13();
