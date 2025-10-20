function f2(a3, a4) {
    const v6 = Symbol.dispose;
    const v8 = {
        [v6]() {
            throw 77;
        },
    };
    using v9 = v8;
    return f2;
}
BigUint64Array.toString = f2;
const v10 = new BigUint64Array(77);
try { v10.join(BigUint64Array); } catch (e) {}
