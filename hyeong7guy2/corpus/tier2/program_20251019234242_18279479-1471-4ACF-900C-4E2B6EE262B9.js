function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6, a7) {
            const v10 = new SharedArrayBuffer(7);
            try {
            } catch(e11) {
                return v10;
                eval(a6);
            } finally {
            }
            const v15 = new DataView(v10);
            const v16 = v15.getUint8();
            v16 / v16;
            v15.getFloat32();
            return a3;
        }
        f5(f2, a3);
        %OptimizeFunctionOnNextCall(f5);
    }
    return a3;
}
function F20(a22) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i25 = 0, i26 = 10; i26; i26--) {
}
F20[Symbol.toPrimitive] = f2;
const v36 = {
    o(a34, a35) {
        super[F20] = 12234;
        return f2;
    },
};
v36.o(v36, v36);
