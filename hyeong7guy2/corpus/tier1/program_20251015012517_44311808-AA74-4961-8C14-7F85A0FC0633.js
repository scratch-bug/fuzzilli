let v0 = /c[\cZ]kV(?:a+)?/imsy;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
            return v0 !== F8;
        }
        f6(a3);
        f6(F1);
        %OptimizeMaglevOnNextCall(f6);
        v0++;
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v16 = new F1();
class C17 {
    static [v16](a19, a20, a21) {
    }
}
