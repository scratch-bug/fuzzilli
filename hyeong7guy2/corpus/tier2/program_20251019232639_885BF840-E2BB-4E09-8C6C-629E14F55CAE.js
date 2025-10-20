const v0 = class {
}
function f3(a4) {
    const v9 = new SharedArrayBuffer(3, { maxByteLength: 1000 });
    const v11 = new Uint8Array(v9);
    const t5 = v11.constructor;
    new t5(v11);
    v11.setFromHex();
}
function F15(a17) {
    if (!new.target) { throw 'must be called with new'; }
}
const v18 = Symbol.toPrimitive;
Symbol.for();
F15[v18] = f3;
const v23 = {
    o(a21, a22) {
        super[F15] = 12234;
    },
};
try { v23.o(); } catch (e) {}
