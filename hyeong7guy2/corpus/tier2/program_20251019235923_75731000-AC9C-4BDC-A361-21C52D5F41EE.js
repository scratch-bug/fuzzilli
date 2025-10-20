let v1;
try { v1 = new Symbol(Symbol); } catch (e) {}
function f3(a4) {
    const v9 = new SharedArrayBuffer(3, { maxByteLength: 1000 });
    const v11 = new Uint8Array(v9);
    v11[2] = v1;
    return a4;
}
function F12(a14) {
    if (!new.target) { throw 'must be called with new'; }
}
F12[Symbol.toPrimitive] = f3;
const v19 = {
    o(a17, a18) {
        super[F12] = 12234;
        return a18;
    },
};
v19.o();
