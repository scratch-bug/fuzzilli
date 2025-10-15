function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try { this.constructor(); } catch (e) {}
    function f5(a6) {
        function F9(a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            a12++;
            this.e = a12;
            Object.defineProperty(a6, 7, { writable: true, configurable: true, value: this });
        }
        const v14 = new F9("2147483647", -3612);
        let v15 = v14.e;
        v15--;
        const v17 = new F9(f5, this);
        return v17;
    }
    f5(f5(f5));
    %OptimizeMaglevOnNextCall(f5);
    f5(f5);
}
new F0(F0, F0);
