const v2 = Array(257);
class C3 {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            function f11(a12) {
                C3--;
                return a12;
            }
            for (let v14 = 0; v14 < 5; v14++) {
                v2.forEach(f11);
            }
            return a10 & a10;
        }
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v17 = new F4(v2, v2);
v17.toString(v17);
