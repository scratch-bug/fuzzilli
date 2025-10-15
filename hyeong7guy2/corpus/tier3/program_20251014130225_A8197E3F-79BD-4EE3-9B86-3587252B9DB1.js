function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function f11(a12) {
            a3[a4] |= a5;
            return a12;
        }
        this.onmessage = f11;
        return a2;
    }
    new Worker(f6, { type: "function" });
}
new F0(F0, F0, F0, F0);
