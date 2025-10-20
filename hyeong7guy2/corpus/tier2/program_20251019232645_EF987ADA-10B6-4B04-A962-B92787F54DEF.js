function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        const v5 = {};
        function f6(a7, a8) {
            a7 ?? a7;
            a8 ?? a8;
            const v11 = a7 ?? a8;
            v11 ?? v11;
            const v15 = new SharedArrayBuffer(7);
            v15.b = a7;
            v15.b = v15;
            let v17;
            try { v17 = DataView.call(); } catch (e) {}
            const v18 = new DataView(v15);
            try { v18.setUint16(v17, v5); } catch (e) {}
            v18.setFloat16(v5);
            return v15;
        }
        f6(v4, v5);
        %OptimizeFunctionOnNextCall(f6);
    }
}
function F22(a24) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i27 = 0, i28 = 10; i28; i28--) {
}
F22[Symbol.toPrimitive] = f2;
const v38 = {
    o(a36, a37) {
        super[F22] = 12234;
        return 12234;
    },
};
v38.o();
