const v2 = new Uint16Array(10);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                return F10;
            }
            v2[4] = f8;
        }
        f8(10);
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v16 = new F3();
class C17 {
    static [v16](a19, a20, a21) {
    }
}
