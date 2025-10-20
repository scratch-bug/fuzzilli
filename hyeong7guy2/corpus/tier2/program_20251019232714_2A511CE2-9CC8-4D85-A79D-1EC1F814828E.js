const v0 = [29578,0,1073741823,1073741824,1073741825,-1024,-4294967295,65536,9996,1073741823];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v8 = v0[1];
            v8--;
            const v10 = v8 << v8;
            function* f11(a12, a13, a14, a15) {
                return a12;
            }
            f11().return(v10);
        }
        f6(a3);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v20 = new F1(F1, F1);
class C21 {
    static [v20](a23, a24, a25) {
    }
}
