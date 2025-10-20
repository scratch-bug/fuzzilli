const v1 = new WeakMap();
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = new Float64Array(1073741824);
    function F11(a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        const v15 = this.constructor;
        try { new v15(v15, a14); } catch (e) {}
        v1.set(this);
    }
    new F11();
    for (let i20 = 0;
        (() => {
            function f22(a23, a24, a25) {
                return v10;
            }
            return i20 < 20000;
        })();
        ++i20) {
    }
}
const v30 = new F3(1073741824, 1073741824, F3, F3);
const v31 = v30.constructor;
new v31(F3, 1073741824, v31);
