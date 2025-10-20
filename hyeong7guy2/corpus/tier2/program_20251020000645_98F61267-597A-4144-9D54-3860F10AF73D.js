const v1 = new Float32Array();
class C2 {
}
function f4(a5) {
    const v10 = new SharedArrayBuffer(3, { maxByteLength: 1000 });
    const v12 = new Uint8Array(v10);
    const t6 = v1.constructor;
    new t6(v12);
}
function F15(a17) {
    if (!new.target) { throw 'must be called with new'; }
}
F15[Symbol.toPrimitive] = f4;
const v22 = {
    o(a20, a21) {
        super[F15] = C2;
        return v1;
    },
};
v22.o(v22, C2);
