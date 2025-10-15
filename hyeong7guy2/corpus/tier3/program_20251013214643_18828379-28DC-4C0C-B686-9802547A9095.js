function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    a4[5];
}
const v7 = new F1(Uint8Array, Symbol);
const v8 = v7.constructor;
try { new v8(); } catch (e) {}
