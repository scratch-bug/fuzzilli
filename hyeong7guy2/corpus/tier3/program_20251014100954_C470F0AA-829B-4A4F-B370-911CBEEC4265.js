function f1(a2, a3, a4) {
    for (let v5 = 0; v5 < 10; v5++) {
        const v7 = Symbol.dispose;
        const v9 = {
            [v7]() {
                return Uint8Array;
            },
        };
        using v10 = v9;
    }
    return a3;
}
const v14 = new Worker(f1, { type: "function" });
v14.getMessage();
