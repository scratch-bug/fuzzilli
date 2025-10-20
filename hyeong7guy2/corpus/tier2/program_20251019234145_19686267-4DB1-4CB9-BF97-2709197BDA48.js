const v0 = [];
const v1 = [v0,v0,v0,v0];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function f9(a10, a11, a12) {
                const v13 = a11?.constructor;
                v0.pop();
                new v13(a11);
                return a4;
            }
            try { f9(); } catch (e) {}
            return f9(v1, v1);
        }
        f7(a4);
        f7(a5);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v20 = new F2();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
