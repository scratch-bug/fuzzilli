class C0 {
}
let v1 = [29578,0,1073741823,1073741824,1073741825,-1024,-4294967295,65536,9996,1073741823];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function f9(a10, a11, a12) {
                try {
                    f9(C0);
                } catch(e14) {
                }
                return a8;
            }
            f9(f9, F2, v1);
            v1--;
        }
        f7(f7);
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v19 = new F2();
class C20 {
    static [v19](a22, a23, a24) {
    }
}
