function f1(a2) {
    const v5 = new Uint8Array(3);
    v5.toBase64().toLocaleUpperCase();
    return 3;
}
function F8(a10) {
    if (!new.target) { throw 'must be called with new'; }
}
F8[Symbol.toPrimitive] = f1;
const v15 = {
    o(a13, a14) {
        super[F8] = a13;
        return a13;
    },
};
v15.o();
function F18(a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    const v23 = this.constructor;
    try { new v23(); } catch (e) {}
    this.h = a20;
    this.b = -4.550388358506144;
}
new F18();
function F26(a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    function F30(a32, a33, a34) {
        if (!new.target) { throw 'must be called with new'; }
    }
    JSON.stringify(v15, JSON, F30);
    const v37 = JSON.parse;
    try { v37.apply(); } catch (e) {}
}
new F26();
