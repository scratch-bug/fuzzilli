function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6, a7) {
            const v9 = new SharedArrayBuffer(12234);
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                function f15() {
                    function f16(a17) {
                        0.44008131708791276 & f15;
                        eval();
                        return f16;
                    }
                    f16(f16());
                    %OptimizeFunctionOnNextCall(f16);
                    return f16;
                }
                Object.defineProperty(this, "toString", { get: f15 });
            }
            const v23 = new F11();
            v23.toString(v23, v9);
            const v26 = new DataView(v9);
            let v27;
            try { v27 = v26.setBigUint64(); } catch (e) {}
            return v27;
        }
        f5();
        %OptimizeFunctionOnNextCall(f5);
    }
    return a3;
}
function F29(a31) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i34 = 0, i35 = 10; i35; i35--) {
}
F29[Symbol.toPrimitive] = f2;
const v45 = {
    o(a43, a44) {
        super[F29] = 12234;
        return f2;
    },
};
v45.o();
