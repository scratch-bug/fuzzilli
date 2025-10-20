function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = (`string${a6}undefined`).codePointAt();
            -(v8 & v8);
            return f5;
        }
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    f4();
    Object.defineProperty(this, "toString", { get: f4 });
}
const v13 = new F0();
v13.toString();
