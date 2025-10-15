function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10(a11, a12) {
        const v30 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,1073741824]);
        const t7 = WebAssembly.Module;
        new t7(v30);
        return F1;
    }
    this.constructor = f10;
    const v34 = a9.constructor;
    try { v34(); } catch (e) {}
}
const v36 = new F4(F1, F1, F1, F1);
new F4(F1, F1, F1, v36);
