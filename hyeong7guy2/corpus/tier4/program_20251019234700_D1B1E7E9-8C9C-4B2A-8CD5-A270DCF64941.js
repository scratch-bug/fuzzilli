function f0(a1, a2, a3) {
    const v5 = Symbol.dispose;
    const v22 = {
        [v5]() {
            function f8(a9) {
                function f10(a11, a12, a13) {
                    return f10;
                }
                const v16 = { type: "function" };
                v16.flushDenormals = v5;
                const v17 = new Worker(f10, v16);
                return v17.postMessage(v16);
            }
            WeakMap[Symbol.toPrimitive] = f8;
            class C21 {
                [WeakMap] = -1000000000000.0;
            }
        },
    };
    using v23 = v22;
    return v5;
}
const v27 = new Worker(f0, { type: "function" });
v27.getMessage();
