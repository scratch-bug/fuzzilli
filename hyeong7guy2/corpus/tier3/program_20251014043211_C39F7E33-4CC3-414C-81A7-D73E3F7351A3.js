function f1(a2, a3) {
    const v5 = Symbol.dispose;
    const v7 = {
        [v5]() {
        },
    };
    using v8 = v7;
    v8 = v7;
    return f1;
}
BigUint64Array.toString = f1;
const v9 = new BigUint64Array();
try { v9.join(BigUint64Array); } catch (e) {}
