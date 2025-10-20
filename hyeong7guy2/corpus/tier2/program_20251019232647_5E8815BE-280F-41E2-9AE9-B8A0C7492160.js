function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = [F0,F0,F0];
    function F5(a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10() {
            return a7;
        }
        function f11(a12) {
            return a12;
        }
        Object.defineProperty(a8, 2, { get: f10, set: f11 });
        Object.seal(a8);
    }
    new F5(v4, v4);
}
const v16 = new F0(F0, F0);
new F0(v16, v16);
