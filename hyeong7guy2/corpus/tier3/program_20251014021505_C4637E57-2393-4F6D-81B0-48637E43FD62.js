function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
    }
    function f9() {
    }
    function F10(a12, a13, a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        const v16 = this.constructor;
        try { new v16(Int16Array, Uint8Array, Uint8Array, a14); } catch (e) {}
        a15.name;
    }
    new F10(WeakSet, WeakSet, -128n, f9);
    new F10(f6, Int16Array, Int16Array, "n");
}
new F1();
new F1();
new F1();
