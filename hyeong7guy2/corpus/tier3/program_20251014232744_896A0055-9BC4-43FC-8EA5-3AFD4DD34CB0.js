function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = [F0,F0,F0,F0];
const v9 = class extends BigInt64Array {
}
for (let i10 = 1000;
    (() => {
        const v11 = {};
        const v13 = [v11];
        Reflect.apply(v6.values, v11, v13, F0, v9);
        return i10 < 20000;
    })();
    ++i10) {
}
