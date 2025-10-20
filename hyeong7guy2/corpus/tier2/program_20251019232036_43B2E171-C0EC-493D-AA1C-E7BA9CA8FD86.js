const v1 = ("-7518").normalize();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            eval(a8);
            let {"a":v11,"c":v12,"length":v13,...v14} = v1;
            return v14;
        }
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    f6();
    Object.defineProperty(this, "toString", { get: f6 });
}
const v17 = new F2();
v17.toString("-7518", v17, v17);
