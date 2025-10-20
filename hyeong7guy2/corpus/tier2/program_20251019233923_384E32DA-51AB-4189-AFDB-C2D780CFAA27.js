const v1 = [0,0];
v1[6] = 0;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v9 = {};
            v1.push(v9);
            function f11(a12, a13, a14) {
                ({"a":a12,} = v9);
                return f7;
            }
            return a8;
        }
        f7(0);
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v17 = new F2();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
