function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        class C8 {
        }
        const v9 = new C8();
        v9.__proto__ = a7;
        return v9;
    }
    f4(f4, this, f4);
}
new F0(F0, F0);
