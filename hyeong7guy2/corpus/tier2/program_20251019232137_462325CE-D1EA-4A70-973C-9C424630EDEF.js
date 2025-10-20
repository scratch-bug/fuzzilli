/xyz{1,32}?/uygmi;
function f4(a5) {
    for (let v6 = 0; v6 < 5; v6++) {
        const v7 = {};
        function f8(a9, a10) {
            a10.b = a10;
            -(a9 ?? a9);
            const v13 = a10 ?? a10;
            try { v13.isPrototypeOf(v6); } catch (e) {}
            a9 ?? a9;
            const v18 = new SharedArrayBuffer(7);
            v18.growable;
            v18.b = v18;
            let v21;
            try { v21 = DataView.call(); } catch (e) {}
            const v22 = new DataView(v18);
            try { v22.setInt32(v7, SharedArrayBuffer); } catch (e) {}
            try { v22.setUint16(v21, v7); } catch (e) {}
            const v25 = v22.setFloat16(v7);
            v25 ?? v25;
            return v18;
        }
        f8.bind();
        f8(v6, v7);
        %OptimizeFunctionOnNextCall(f8);
    }
}
f4.d = f4;
function F29(a31) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i34 = 0, i35 = 10; i35; i35--) {
}
F29[Symbol.toPrimitive] = f4;
const v45 = {
    o(a43, a44) {
        super[F29] = 12234;
    },
};
v45.o();
