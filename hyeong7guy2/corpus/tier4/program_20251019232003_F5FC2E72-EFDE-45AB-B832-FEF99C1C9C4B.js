const v1 = new WeakMap();
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    new Float64Array(1073741824);
    function F11(a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        v1.set(this);
    }
    new F11(this, v1);
}
new F3(F3, 1073741824, F3, WeakMap);
gc();
