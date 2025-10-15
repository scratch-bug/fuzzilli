function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a3[1] = a3;
    this.e = a3;
    function f6() {
        return F1;
    }
    function f7(a8) {
        return f7;
    }
    Object.defineProperty(a4, 3391783189, { configurable: true, get: f6, set: f7 });
}
const v9 = new F1(Uint32Array, Uint32Array);
const v10 = v9.e;
v10[210] = v10;
const v11 = { ...v10 };
