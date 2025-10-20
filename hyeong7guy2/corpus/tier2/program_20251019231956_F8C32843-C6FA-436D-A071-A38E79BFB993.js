let v1 = 129;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function f9() {
                return f9;
            }
            v1 ^= f9 >> f9;
            arguments["p"] = -4096;
            return F2;
        }
        f7(f7.call());
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v15 = new F2();
const v16 = v15.toString;
v16(v16);
