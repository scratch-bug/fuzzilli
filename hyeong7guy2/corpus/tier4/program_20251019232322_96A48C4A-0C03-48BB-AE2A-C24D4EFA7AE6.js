const v3 = class {
}
new v3();
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = this.constructor;
    try { new v12("n", F6, a11, F6); } catch (e) {}
    try { a10.constructor(); } catch (e) {}
}
new F6();
function f17(a18, a19) {
    const t11 = "n";
    t11.length = -6;
    const v21 = Symbol.dispose;
    const v25 = {
        [v21]() {
            gc();
        },
    };
    using v26 = v25;
    v26 = v25;
}
BigUint64Array.toString = f17;
const v27 = new BigUint64Array();
try { v27.join(BigUint64Array); } catch (e) {}
