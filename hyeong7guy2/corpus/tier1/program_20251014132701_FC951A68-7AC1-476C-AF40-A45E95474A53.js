const v0 = class {
}
const v1 = new v0();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v13 = new F9(F2, F9);
            const v14 = v1.constructor;
            new v14();
            v13.e = v13;
            let v16 = 30349n;
            const v17 = v16--;
            const v18 = v17 ^ v17;
            const v19 = (a20, a21, a22) => {
                return f7;
            };
            eval(v14);
            return v18;
        }
        f7(F2);
        f7(f7);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v27 = new F2();
v27.toString();
