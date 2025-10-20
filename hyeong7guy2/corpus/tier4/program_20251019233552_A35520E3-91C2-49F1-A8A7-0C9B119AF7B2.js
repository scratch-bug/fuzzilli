const v2 = { maxByteLength: 1073741825 };
const v4 = new SharedArrayBuffer(2311, v2);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function F9(a11, a12, a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        const v15 = this.constructor;
        try { new v15(F9, v4); } catch (e) {}
        const v18 = new Uint32Array(a12);
        v18.length;
    }
    new F9(SharedArrayBuffer, F5, 1073741825, SharedArrayBuffer);
}
const v21 = new F5(1073741825, v2);
const t14 = v21.constructor;
new t14();
