function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        this.d = Uint8ClampedArray;
    }
    const v8 = new F4(Uint8ClampedArray, F4);
    const v9 = v8.d;
    function f10() {
        return f10;
    }
    function f11(a12) {
        return F0;
    }
    Object.defineProperty(v9, 0, { configurable: true, get: f10, set: f11 });
}
new F0();
new F0();
