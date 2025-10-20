function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        const v5 = {};
        function f6(a7, a8) {
            const v9 = [-1000000000000.0,NaN,613.578803631691,-1.0631834177703982e+308,8.834063413193036];
            function f10() {
                return v5;
            }
            function f11() {
            }
            ({ construct: f11 }).construct();
            Object.defineProperty(v9, 175, { enumerable: true, get: Array, set: f10 });
            try { a8.isPrototypeOf(v4); } catch (e) {}
            const v18 = new SharedArrayBuffer(7);
            function f19() {
                return Array;
            }
            [f19];
            class C21 {
            }
            function F22(a24, a25) {
                if (!new.target) { throw 'must be called with new'; }
                const t22 = Temporal.Duration;
                const v28 = new t22();
                v28.blank;
            }
            new F22();
            let v32;
            try { v32 = DataView.call(); } catch (e) {}
            const v33 = new DataView(v18);
            v33.setUint16(v32, v5);
            return f6;
        }
        f6(v4, v5);
        %OptimizeFunctionOnNextCall(f6);
    }
    return a3;
}
function F36(a38) {
    if (!new.target) { throw 'must be called with new'; }
}
Temporal.PlainDateTime;
F36[Symbol.toPrimitive] = f2;
const v45 = {
    o(a43, a44) {
        super[F36] = 12234;
        return Symbol;
    },
};
v45.o(Symbol, v45);
