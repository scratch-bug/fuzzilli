function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        const v5 = {};
        function f6(a7, a8) {
            const v9 = [-1000000000000.0,NaN,613.578803631691,-1.0631834177703982e+308,8.834063413193036];
            function f10() {
                return Symbol;
            }
            Object.defineProperty(v9, 175, { enumerable: true, get: Array, set: f10 });
            try { a8.isPrototypeOf(v4); } catch (e) {}
            const v15 = new SharedArrayBuffer(7);
            function f16() {
                return a3;
            }
            const v17 = [f16,f16,f16,f16,f16];
            function F19(a21) {
                if (!new.target) { throw 'must be called with new'; }
                this.a = 8;
            }
            new Proxy(Symbol, {});
            const v25 = new F19();
            class C26 {
                static #o(a28, a29, a30) {
                    const v31 = { value: v17 };
                    v25();
                }
            }
            new C26();
            let v35;
            try { v35 = DataView.call(); } catch (e) {}
            const v36 = new DataView(v15);
            try { v36.setInt32(v5, SharedArrayBuffer); } catch (e) {}
            v36.setUint16(v35, v5);
            v36.setFloat16(v5);
        }
        f6(v4, v5);
        %OptimizeFunctionOnNextCall(f6);
    }
    return a3;
}
function F41(a43) {
    if (!new.target) { throw 'must be called with new'; }
}
F41[Symbol.toPrimitive] = f2;
const v48 = {
    o(a46, a47) {
        super[F41] = 12234;
        return this;
    },
};
v48.o();
