function f0() {
}
const v1 = class extends f0 {
    get g() {
        const v5 = Symbol.asyncDispose;
        this[v5];
        return v5;
    }
}
const v8 = new v1();
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a12;
    this.b = a13;
    this.d = v8;
}
new F10(f0, v1);
const v15 = new F10("negated", v8);
new F10(v15, v15);
new Uint32Array(997);
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.constructor;
    function f30() {
        return 750;
    }
    f30[Symbol.toPrimitive] = f30;
    class C32 extends f30 {
    }
    function F33() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v36 = ("n").match(F33);
    const v39 = String.prototype.normalize;
    try { v39.call(v36); } catch (e) {}
    function f41() {
        return "NFC";
    }
    f41.shared = "NFC";
    f41.maximum = 2624;
    Object.defineProperty(f41, "initial", { value: C32 });
    const t41 = WebAssembly.Memory;
    const v44 = new t41(f41);
    v44.toResizableBuffer();
}
new F21(F21, F21);
