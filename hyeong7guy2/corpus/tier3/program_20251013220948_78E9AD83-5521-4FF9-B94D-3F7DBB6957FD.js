function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = Symbol.dispose;
    const v9 = {
        [v7]() {
        },
    };
    using v10 = v9;
}
const v11 = new F1(Symbol, Symbol, F1, F1);
try { v11.constructor(v11, F1, v11, Symbol); } catch (e) {}
for (let i15 = 0, i16 = 10; i16; i16--) {
}
