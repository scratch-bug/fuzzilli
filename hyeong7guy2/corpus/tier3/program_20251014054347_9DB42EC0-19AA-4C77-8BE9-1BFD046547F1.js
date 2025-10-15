const v0 = class {
}
function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        const v11 = new ArrayBuffer(2, { maxByteLength: 4085 });
        const v13 = new Int8Array(v11);
        v13[1];
        return a5;
    }
    a5.constructor = f6;
    const t11 = a5.constructor;
    t11(v0, f6, v0);
}
new F1(v0, v0, v0);
