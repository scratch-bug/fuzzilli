const v0 = [29578,0,1073741823,1073741824,1073741825,-1024,-4294967295,65536,9996,1073741823];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v8 = v0[1];
            function f9(a10, a11, a12) {
                try {
                    f9();
                } catch(e14) {
                }
            }
            f9(f9, F1, v0);
            v8--;
        }
        f6(f6);
        f6(a3);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v19 = new F1(F1, F1);
class C20 {
    static [v19](a22, a23, a24) {
    }
}
