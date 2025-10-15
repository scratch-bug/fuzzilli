function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            Array(1048576).constructor(v2);
        }
        f8(F3);
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
    f7();
}
const v16 = new F3();
class C17 {
    static [v16](a19, a20, a21) {
    }
}
