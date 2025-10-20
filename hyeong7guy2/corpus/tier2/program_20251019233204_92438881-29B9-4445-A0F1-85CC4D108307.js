function f1(a2) {
    for (let v3 = 0; v3 < 5; v3++) {
        function f4(a5, a6) {
            const v9 = { maxByteLength: 1000 };
            let v10 = 1000;
            const v11 = new ArrayBuffer(v10, v9);
            const v13 = new Uint8ClampedArray(v11);
            ({"byteOffset":v10,} = v13);
            return v13;
        }
        f4();
        %OptimizeFunctionOnNextCall(f4);
    }
    return 12234;
}
function F15(a17) {
    if (!new.target) { throw 'must be called with new'; }
}
F15[Symbol.toPrimitive] = f1;
for (let i22 = 0, i23 = 10; i23; i23--) {
}
const v32 = {
    o(a30, a31) {
        super[F15] = 12234;
        return a31;
    },
};
v32.o();
