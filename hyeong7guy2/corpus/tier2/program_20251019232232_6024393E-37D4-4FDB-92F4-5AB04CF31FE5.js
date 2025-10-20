function f3(a4) {
    const v9 = new SharedArrayBuffer(3, { maxByteLength: 1000 });
    const v11 = new Uint8Array(v9);
    v11.includes(1.7796266787644388e+308);
}
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
}
F13[Symbol.toPrimitive] = f3;
const v20 = {
    o(a18, a19) {
        super[F13] = 12234;
        return F13;
    },
};
v20.o(Symbol, Symbol);
