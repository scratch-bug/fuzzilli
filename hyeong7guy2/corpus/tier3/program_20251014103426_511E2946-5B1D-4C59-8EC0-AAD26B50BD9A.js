function f1(a2, a3) {
    const v5 = Symbol.dispose;
    const v9 = {
        [v5]() {
            gc();
        },
    };
    using v10 = v9;
    v10 = v9;
    return BigUint64Array;
}
BigUint64Array.toString = f1;
const v11 = new BigUint64Array();
try { v11.join(BigUint64Array); } catch (e) {}
