const v2 = new Uint32Array(2089893349);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            const v10 = v2.length;
            function f11(a12, a13) {
                return f8;
            }
            %OptimizeFunctionOnNextCall(f11);
            v10 - v10;
            return a5;
        }
        f8(f8);
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v17 = new F3();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
