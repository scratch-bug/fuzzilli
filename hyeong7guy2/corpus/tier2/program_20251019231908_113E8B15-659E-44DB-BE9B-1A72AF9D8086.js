function f3(a4) {
    const v9 = new SharedArrayBuffer(3, { maxByteLength: 1000 });
    const v10 = new Uint16Array(v9);
    const t3 = v10.constructor;
    new t3(v10);
}
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
}
F13[Symbol.toPrimitive] = f3;
const v20 = {
    o(a18, a19) {
        super[F13] = 12234;
    },
};
v20.o();
