const v2 = { maxByteLength: 1073741825 };
const v4 = new SharedArrayBuffer(2311, v2);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function F9(a11, a12, a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        const v16 = new Uint32Array(v4);
        const t7 = v16.constructor;
        new t7(v16);
    }
    new F9();
}
new F5(SharedArrayBuffer, v2);
