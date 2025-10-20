let v0 = /c[\cZ]kV(?:a+)?/symi;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
            v0 != F8;
        }
        f6(f6());
        %OptimizeMaglevOnNextCall(f6);
        v0++;
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v16 = new F1(F1, v0);
class C17 {
    static [v16](a19, a20, a21) {
    }
}
