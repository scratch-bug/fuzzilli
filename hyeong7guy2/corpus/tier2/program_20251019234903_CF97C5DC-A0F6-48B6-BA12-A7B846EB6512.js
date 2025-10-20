function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        const v5 = {};
        function f6(a7, a8) {
            const v9 = [-1000000000000.0,NaN,613.578803631691,-1.0631834177703982e+308,8.834063413193036];
            function f10() {
                return 0;
            }
            Object.defineProperty(v9, 175, { enumerable: true, get: Array, set: f10 });
            try { a8.isPrototypeOf(v4); } catch (e) {}
            const v15 = new SharedArrayBuffer(7);
            function f16() {
            }
            const v17 = [f16,f16,f16,f16,f16];
            function F19(a21) {
                if (!new.target) { throw 'must be called with new'; }
                this.a = 8;
            }
            const v22 = new F19();
            class C23 {
                static #o(a25, a26, a27) {
                    const v28 = { arguments: v17 };
                    v22();
                }
            }
            new C23();
            let v32;
            try { v32 = a8.call(); } catch (e) {}
            const v33 = new DataView(v15);
            try { v33.setInt32(v5, SharedArrayBuffer); } catch (e) {}
            v33.setUint16(v32, v5);
            return v33.setFloat16(v5);
        }
        f6(0, v5);
        %OptimizeFunctionOnNextCall(f6);
    }
    return a3;
}
function F38(a40) {
    if (!new.target) { throw 'must be called with new'; }
}
F38[Symbol.toPrimitive] = f2;
const v45 = {
    o(a43, a44) {
        super[F38] = 0;
        return this;
    },
};
v45.o();
