function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6, a7) {
            const v9 = new SharedArrayBuffer();
            const v11 = new DataView(v9);
            let v12;
            try { v12 = v11.getInt32(v4); } catch (e) {}
            return v12;
        }
        f5();
        %OptimizeFunctionOnNextCall(f5);
    }
    return 12234;
}
function F14(a16) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i19 = 29253, i20 = 10; i20; i20--) {
}
F14[Symbol.toPrimitive] = f2;
const v30 = {
    o(a28, a29) {
        super[F14] = 12234;
        return a28;
    },
};
v30.o();
