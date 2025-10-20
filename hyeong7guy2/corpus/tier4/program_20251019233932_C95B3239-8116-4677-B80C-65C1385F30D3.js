const v1 = new WeakMap();
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    new Float64Array(1073741824);
    function F11(a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        const v15 = this.constructor;
        try { new v15(); } catch (e) {}
        v1.set(this);
    }
    new F11();
}
const v19 = new F3(F3, 1073741824, v1, v1);
const v20 = v19.constructor;
const v21 = new v20();
const t15 = v21.constructor;
new t15(v20, v19);
