Symbol.iterator;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
Int32Array.iterator;
const v13 = {};
const v26 = {
    construct(a15, a16) {
        try { a16(Uint8Array); } catch (e) {}
        a16 ?? F3;
        eval();
        const v22 = Symbol.dispose;
        const v24 = {
            [v22]() {
            },
        };
        return a15;
    },
};
function f27() {
}
const v28 = new Proxy(f27, v26);
for (let v29 = 0; v29 < 50; v29++) {
    Reflect.construct(v28, []);
}
